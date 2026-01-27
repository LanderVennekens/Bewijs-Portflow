import fs from "fs";
import { scrapePlaystations } from "./playstation.js";
import { scrapeLaptops } from "./laptop.js";
import { scrapeImmo } from "./immo.js";

async function main() {
  // Playstations
  const playFile = "Playstations.json";
  const playData = await scrapePlaystations();
  if (fs.existsSync(playFile)) {
    console.log("Let op: " + playFile + " bestaat al en wordt overschreven.");
  }
  fs.writeFileSync(playFile, JSON.stringify(playData, null, 2), "utf-8");
  console.log("Playstation-bestand opgeslagen.");

  // Laptops
  const laptopFile = "Laptops.json";
  const laptopData = await scrapeLaptops();
  if (fs.existsSync(laptopFile)) {
    console.log("Let op: " + laptopFile + " bestaat al en wordt overschreven.");
  }
  fs.writeFileSync(laptopFile, JSON.stringify(laptopData, null, 2), "utf-8");
  console.log("Laptop-bestand opgeslagen.");

  // Immo
  const immoFile = "Immo.json";
  const immoData = await scrapeImmo();
  if (fs.existsSync(immoFile)) {
    console.log("Let op: " + immoFile + " bestaat al en wordt overschreven.");
  }
  fs.writeFileSync(immoFile, JSON.stringify(immoData, null, 2), "utf-8");
  console.log("Immo-bestand opgeslagen.");
}

main();