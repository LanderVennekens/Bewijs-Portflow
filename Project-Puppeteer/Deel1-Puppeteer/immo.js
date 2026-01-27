import puppeteer from "puppeteer"; // Puppeteer voor headless browser-automatisering
import fs from "fs";               // FileSystem om het resultaat weg te schrijven

// Hulpfunctie: parseert een prijs-string naar een getal of retourneert "onbekend"
function parsePrice(text) {
  if (!text || text === "onbekend") return "onbekend";
  // Verwijder spaties, euro-teken, punten (duizendtallen) en vervang komma door punt (decimaal)
  const cleaned = String(text).replace(/\s/g, "").replace(/€/g, "").replace(/\./g, "").replace(",", ".");
  const n = parseFloat(cleaned); // parseFloat leest de genormaliseerde string als getal
  return Number.isFinite(n) ? n : "onbekend"; // Als het een geldig getal is, geef het terug, anders "onbekend"
}

// Hulpfunctie: haalt een integer uit een tekst (bijv. "2 slaapkamers" -> 2) of "onbekend"
function parseIntFromText(text) {
  if (!text || text === "onbekend") return "onbekend";
  const m = String(text).match(/-?\d+/); // zoekt de eerste (eventueel negatieve) reeks cijfers
  return m ? parseInt(m[0], 10) : "onbekend";
}

// Hoofd scrapingfunctie die de immoscoop-pagina bezoekt en data ophaalt
async function scrapeImmo() {
  console.log("Start immo scraping...");
  // Start een Chromium-instance (headless). "headless: 'new'" is een actuele optie voor recente Puppeteer versies.
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Zet user-agent zodat de site niet direct een bot herkent (kan nodig zijn voor consistente rendering)
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
  );
  page.setDefaultNavigationTimeout(60000); // Timeout van 60s voor navigatie

  // Doel-URL (zoekresultaten voor 2480 Dessel)
  const url = "https://www.immoscoop.be/zoeken/te-koop/2480-dessel";
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

  // Wacht tot de card-elementen geladen zijn (CSS-selector specifiek voor deze site)
  await page.waitForSelector(".property-card_card__MIqQB", { timeout: 60000 });

  // Haal de titel van de pagina (bijv. de zoek-titel) uit de h1
  const titel = await page.$eval('h1.heading-3.truncate', el => el.innerText);  

  // $$eval voert de callback in de page-context uit en returnt de gemapte resultaten naar Node.
  const houses = await page.$$eval(".property-card_card__MIqQB", (rows) => {
    // Map van mogelijke keys naar leesbare labels (uniform maken)
    const LABEL_MAP = {
      "livable-surface-area": "Bewoonbare oppervlakte (m2)",
      livableSurfaceArea: "Bewoonbare oppervlakte (m2)",
      "terrain-area": "Perceeloppervlakte (m2)",
      bedrooms: "Slaapkamers",
      BedroomNumber: "Slaapkamers",
      bathrooms: "Badkamers",
      BathroomNumber: "Badkamers",
      parking: "Parkeerplaatsen",
      ParkingAvailable: "Parkeerplaatsen",
      "parking-available": "Parkeerplaatsen",
      "EPC-label": "EPC-label",
      "epc-label": "EPC-label",
    };

    // Kleine helper: zet null/lege strings om naar "onbekend"
    function getOrOnbekend(text) {
      if (text == null) return "onbekend";
      const t = String(text).trim();
      return t === "" ? "onbekend" : t;
    }

    // Helper om numerieke waardes uit strings te extraheren (bijv. "120 m²" -> "120" of "120,5" -> "120.5")
    function extractNumber(text) {
      if (!text) return "onbekend";
      const m = String(text).match(/-?\d+([.,]\d+)?/);
      return m ? m[0].replace(",", ".") : "onbekend";
    }

    // Loop over alle property-card elementen en bouw een object per huis
    return rows.map((row) => {
      // Type: eerste woord van de titel (bv. "Huis", "Appartement")
      const Type = getOrOnbekend(row.querySelector(".property-card_title__togt2")?.innerText?.split(/\s+/)[0]);

      // Adres: lees uit <address>, vervang nieuwe regels door komma's
      const Adres = getOrOnbekend((row.querySelector("address")?.innerText || "").replace(/\n+/g, ", "));

      // Prijs: full prijs-string (bijv. "€ 350.000") of "onbekend"
      const Prijs = getOrOnbekend(row.querySelector(".property-card_price__XfyPH")?.innerText);

      // Sommige eigenschappen zitten in een .FeatureIcons wrapper; fallback naar de hele card
      const wrapper = row.querySelector(".FeatureIcons_wrapper__qWm9o") || row;
      const items = Array.from(wrapper.querySelectorAll(".FeatureIcons_item__9M7v0"));
      const Eigenschappen = {};

      // Loop door feature-items en bepaal key/value voor elk
      items.forEach((item, idx) => {
        // Probeer data-attributes te vinden die de key aangeven
        const icon = item.querySelector("[data-name], [data-selector]");
        let key = icon
          ? icon.getAttribute("data-name") || icon.getAttribute("data-selector")
          : null;
        if (key && key.startsWith("feature-icon:div:"))
          key = key.replace("feature-icon:div:", ""); // strip prefix
        if (!key) key = item.getAttribute("title") || `feature_${idx}`; // fallback key

        // Map key naar leesbaar label, of gebruik titel/key als fallback
        const mappedLabel = LABEL_MAP[key] || item.getAttribute("title") || key;

        // Vind het element dat de waarde bevat (soms klasse .FeatureIcons_value__flPF6 of een span)
        const valueEl = item.querySelector(".FeatureIcons_value__flPF6") || item.querySelector("span");
        const raw = valueEl ? valueEl.textContent : null;

        // Voor sommige labels willen we numerieke output; anders bewaren we de raw string (of "onbekend")
        const numericLabels = [
          "Bewoonbare oppervlakte (m2)",
          "Perceeloppervlakte (m2)",
          "Slaapkamers",
          "Badkamers",
          "Parkeerplaatsen"
        ];
        Eigenschappen[mappedLabel] = numericLabels.includes(mappedLabel)
          ? extractNumber(getOrOnbekend(raw))
          : getOrOnbekend(raw);
      });

      // Zorg dat verplichte properties altijd bestaan (anders "onbekend")
      const verplichte = [
        "Bewoonbare oppervlakte (m2)",
        "Slaapkamers",
        "Badkamers",
        "Parkeerplaatsen",
        "EPC-label",
      ];
      verplichte.forEach((k) => {
        if (!(k in Eigenschappen)) Eigenschappen[k] = "onbekend";
      });

      // Return object met Type, Adres, Prijs en Eigenschappen
      return { Type, Adres, Prijs, Eigenschappen };
    });
  });

  // Sluit pagina en browser netjes af
  await page.close();
  await browser.close();

  // Geef titel en lijst van huizen terug aan caller
  return { Titel: titel, Houses: houses };
}

// Filterfunctie: houd alleen huizen die voldoen aan prijs-, slaapkamer- en type-eisen
function filterHouses(houses) {
  return houses.filter((house) => {
    const price = parsePrice(house.Prijs); // parseer prijs naar nummer of "onbekend"
    const bedrooms = parseIntFromText(house.Eigenschappen?.["Slaapkamers"]); // integer aantal slaapkamers
    const isHouse = String(house.Type || "").toLowerCase() === "huis"; // check of Type gelijk is aan "huis"
    return (
      price !== "onbekend" &&
      price <= 500000 &&       // max 500k
      bedrooms !== "onbekend" &&
      bedrooms >= 2 &&         // minstens 2 slaapkamers
      isHouse
    );
  });
}

// Main: voert scraping uit, filtert, en schrijft resultaat naar Immo.json
async function main() {
  const result = await scrapeImmo();
  const filteredHouses = await filterHouses(result.Houses);

  const outFile = "Immo.json";
  if (fs.existsSync(outFile)) {
    console.log("Let op: Immo.json bestaat al en wordt overschreven.");
  }

  const finalJson = {
    Titel: result.Titel,
    Houses: filteredHouses
  };

  // Schrijf het JSON-bestand mooi geformatteerd (2 spaties)
  fs.writeFileSync(outFile, JSON.stringify(finalJson, null, 2), "utf-8");
  console.log("Resultaat opgeslagen in Immo.json");
}

main(); // Start het programma

export { scrapeImmo }; // Exporteer de scraping-functie (handig voor tests of hergebruik)