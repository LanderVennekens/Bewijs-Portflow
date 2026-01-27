import puppeteer from 'puppeteer'; 
import fs from 'fs';              

// Hoofdfunctie die laptops van (hier) Coolblue scrapt
async function scrapeLaptops() {
    console.log('Start laptop scraping...');
    const browser = await puppeteer.launch(); // Start Chromium (headless standaard)
    const urls = [
        'https://www.coolblue.be/nl/laptops/filter/besturingssysteem:macos,windows'
    ];
    let allLaptops = []; // Verzamelt alle gevonden laptop-objecten over alle pagina's

    // Loop door alle opgegeven URL(s)
    for (const url of urls) {
        const page = await browser.newPage(); // Open een nieuw tabblad/page
        // Stel een browser user-agent in zodat de site je als normale browser ziet
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36');
        await page.goto(url, { waitUntil: 'domcontentloaded' }); // Navigeer naar de URL en wacht tot DOM geladen is

        // Voer code uit in de pagina-context om alle product-cards te parsen
        const laptops = await page.$$eval('.product-card', (rows) => {
            // rows is een array van DOM-elementen; map naar JS-object met de gewenste velden
            return rows.map((row) => ({
                // Haal de naam van het product (selector .product-card__title)
                Naam: row.querySelector('.product-card__title')?.textContent.trim() || '',
                // Haal de prijs (selector .sales-price__current); bewaar als string voor nu
                Prijs: row.querySelector('.sales-price__current')?.textContent.trim() || '',
                // Haal het aantal/tekst van reviews (als aanwezig)
                Reviews: row.querySelector('.review-rating__reviews')?.textContent.trim() || '',
                // Bepaal beschikbaarheid: eerst beschikbaar-selector, dan unavailable fallback, anders 'Onbekend'
                Beschikbaarheid: (
                    row.querySelector('.color--available .icon-with-text__text')?.textContent.trim() ||
                    row.querySelector('.color--unavailable')?.textContent.trim() ||
                    'Onbekend'
                ),
                // Bouw een absolute URL naar de detailpagina als href aanwezig is; anders lege string
                DetailURL: row.querySelector('a.link')?.getAttribute('href')
                    ? 'https://www.coolblue.be' + row.querySelector('a.link').getAttribute('href')
                    : '',
            }));
        });

        // Voeg de gevonden laptops van deze pagina toe aan de samengestelde lijst
        allLaptops = allLaptops.concat(laptops);
        await page.close(); // Sluit de pagina/tab
    }
    
    // Filter de lijst: alleen laptops met een prijs > 600 (prijs eerst numeriek maken)
    const filteredLaptops = allLaptops.filter((laptop) => {
        // Verwijder alle niet-cijfertekens uit de prijs-string (bv. € , . spaties) en parseer naar integer
        const prijsString = (laptop.Prijs || '').replace(/[^\d]/g, '');
        const prijsGetal = parseInt(prijsString, 10) || 0;
        return prijsGetal > 600;
    });

    await browser.close(); // Sluit de browser instance
    console.log('Laptop scraping voltooid.');
    return filteredLaptops; // Retourneer gefilterde resultaten
}

// Entrypoint: roept scrape functie aan en schrijft resultaat weg
async function main() {
    const laptops = await scrapeLaptops();
    fs.writeFileSync('Laptops.json', JSON.stringify(laptops, null, 2), 'utf-8'); // Schrijf mooi geformatteerde JSON
    console.log('Resultaat opgeslagen in Laptops.json');
}

main(); // Start het script

export { scrapeLaptops }; // Exporteer de functie voor hergebruik of tests