import puppeteer from 'puppeteer'; 
import fs from 'fs';               

// Scrapes PlayStation-producten van Coolblue en filtert op prijs > 600
async function scrapePlaystations() {
  console.log('Start playstation scraping...');

  // Start Chromium; 'headless: "new"' voor recente Puppeteer-versies (draait zonder GUI)
  const browser = await puppeteer.launch({ headless: 'new' });

  // Open een nieuw tabblad/pagina
  const page = await browser.newPage();

  // Stel een veelgebruikte browser User-Agent in zodat de site je als normale browser ziet
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');

  // Navigeer naar de PlayStation5-collectie en wacht tot netwerkverkeer grotendeels stil is
  await page.goto('https://www.coolblue.be/nl/consoles/playstation5', { waitUntil: 'networkidle0' });

  // Lees de paginatitel (gebruikelijke header selector op deze site)
  const pageTitle = await page.$eval('.filtered-search__header h1', (element) => element.textContent.trim());

  // Parsen van alle product-cards op de pagina in de page-context
  // $$eval voert de callback direct in de browser uit en retourneert de gemapte resultaten
  const products = await page.$$eval('.product-card', (rows) => {
    return rows.map((row) => ({
      // Haal de producttitel uit de card
      productTitle: row.querySelector('.product-card__title').textContent.trim(),

      // Haal de prijs-string (bijv. "€ 699,-")
      price: row.querySelector('.sales-price__current').textContent.trim(),

      // Bepaal beschikbaarheid: eerst check voor available, anders unavailable (fallback)
      beschikbaarheid: (
        row.querySelector('.color--available .icon-with-text__text')?.textContent.trim() ||
        row.querySelector('.color--unavailable')?.textContent.trim()
      )
    }));
  });

  // Filter de producten: alleen producten met numerieke prijs > 600
  const filteredProducts = products.filter((product) => {
    // Verwijder alle niet-cijfertekens zodat we enkel de cijfers overhouden
    const prijsString = product.price.replace(/[^\d]/g, '');
    // Parse naar integer (basis 10)
    const prijsGetal = parseInt(prijsString, 10);
    return prijsGetal > 600;
  });

  // Sluit de browser netjes af
  await browser.close();

  // Retourneer de gefilterde producten (pageTitle wordt hier niet gebruikt maar kan nuttig zijn)
  return filteredProducts;
}

// Entrypunt: voer de scraper uit en schrijf resultaat naar JSON-bestand
async function main() {
  const products = await scrapePlaystations();
  const outFile = "Playstations.json";

  // Waarschuwing als bestand al bestaat (wordt overschreven)
  if (fs.existsSync(outFile)) {
    console.log("Let op: Playstations.json bestaat al en wordt overschreven.");
  }

  // Schrijf het resultaat mooi geformatteerd weg
  fs.writeFileSync(outFile, JSON.stringify(products, null, 2), "utf-8");
  console.log("Resultaat opgeslagen in Playstations.json");
}

main(); // Run het script

export { scrapePlaystations }; // Exporteer functie voor hergebruik of tests