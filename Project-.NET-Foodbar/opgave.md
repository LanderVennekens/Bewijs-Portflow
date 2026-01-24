# 1. Opdrachtbeschrijving

## 1.1. Opdrachtgever
De opdrachtgever is de eigenaar van een restaurant.

## 1.2. Huidige situatie
Momenteel reserveert een klant bij het restaurant door te bellen of een e-mail te sturen. De klant ontvangt hierbij geen bevestiging. Op het afgesproken tijdstip meldt de klant zich aan in het restaurant, waarna de zaalverantwoordelijke een tafel toewijst. Een ober komt daarna de bestelling opnemen en schrijft dit op een papiertje. Hij geeft de bestelling van drank door aan de barman en geeft daarna het briefje aan de kok. Deze hangt het briefje op een magneetbord en maakt daarna het eten klaar. Als het eten klaar is, drukt de kok op een belletje en dan komt de ober het eten halen en brengt dit naar de klant. Na het eten, roept de klant de ober en vraagt om de rekening. Het gebeurt soms dat de klant vertrekt zonder te betalen. Ook kan de kok soms het handschrift niet goed lezen van de ober of heeft de barman de bestelling niet goed gehoord, waardoor er ook al wel verkeerde bestellingen geleverd zijn.

## 1.3. Gewenste situatie
Daarom wil de klant graag een nieuwe innovatieve website voor zowel klanten als medewerkers (eigenaar, kok, ober, zaalverantwoordelijke), met functies zoals tafelindeling, reservatiebeheer, bestellingenbeheer, rollenbeheer en geautomatiseerde communicatie via e-mail. Het afrekenen gebeurt dan automatisch bij een online bestelling door de klant.

Op de homepagina staat er een hero-afbeelding van het restaurant of gerechten. Er is een navigatiebalk met (Home, Menu, Foto’s, Reserveren, Contact en Aanmelden). Op de homepagina staat ook een knop om een tafel te reserveren, een sectie met openingstijden en locatie en de 5 recentste reviews van klanten.

### 1.3.1. Klanten
- Kunnen een account aanmaken met naw-gegevens, geboortedatum, email en telefoonnummer, interesse in de nieuwsbrief (ja/nee). Klanten kunnen hun account wijzigen of verwijderen. In het laatste geval worden alle persoonlijke gegevens leeg gemaakt en wordt de account op inactief gezet. Dezelfde klant zal in de toekomst opnieuw een account moeten aanmaken. Als een klant zijn wachtwoord vergeten is, kan hij een mailverzoek aanvragen om zijn wachtwoord te wijzigen. In zijn profiel kan de klant ook steeds zijn wachtwoord wijzigen.
- Kunnen een tafel reserveren en annuleren. Op het reservatieformulier kunnen ze een datum en aankomstuur opgeven, het aantal personen en speciale verzoeken (bijvoorbeeld dieetwensen). Het reservatieformulier moet beschikbare tijdsloten tonen. De klant krijgt eerst nog een bevestigingsoverzicht vooraleer effectief te reserveren. Klanten krijgen een emailbevestiging van de reservatie met het tijdstip. Een klant kan in zijn profiel steeds de afspraak wijzigen of annuleren tot een uur voor de reservatie.
- Krijgen “één week” voor de effectieve reservatie een welkomstmail met hierin algemene richtlijnen (parkeergelegenheden, tijdstip, locatie, huisdieren toegelaten,…). Reserveert de klant binnen deze “één week”, krijgt hij deze welkomstmail direct toegestuurd.
- Als de zaalverantwoordelijke een tafel heeft toegewezen, kan de klant zelf via zijn gsm (of een daarvoor beschikbare tablet) een bestelling plaatsen (gerechten en drank bestellen). Klanten kunnen online hun besteloverzicht raadplegen en, zolang een bestelling niet in behandeling staat, deze ook annuleren. De klant krijgt steeds een emailbevestiging van elke bestelling.
- Klanten krijgen na betaling een mail met hierin de mogelijkheid een review (=enquête) achter te laten.

### 1.3.2. Zaalverantwoordelijke
- Kan tafels toewijzen aan klanten, eventueel op basis van een plattegrond. Er moeten visuele indicatoren aanwezig zijn om de status van een tafel aan te geven: groen voor vrij, oranje voor gereserveerd en rood voor bezet. Wanneer een klant het restaurant binnenkomt, controleert de zaalverantwoordelijke of er een reservatie is gemaakt. Indien dit het geval is, wordt de reservatie bevestigd. Heeft de klant geen voorafgaande reservatie, dan maakt de zaalverantwoordelijke ter plaatse een nieuwe reservatie aan. Na bevestiging kan de klant plaatsnemen.
- Kan een factuur afrekenen. Betalen gebeurt via een extern betaalsysteem (liefst Payconiq) of cash (enkel bij de zaalverantwoordelijke). Na betaling wordt een bedankmail gestuurd met de factuur en een link naar een online enquête. Bij onregelmatigheden (zoals vertrekken zonder te betalen, verkeerde bestelling…) kan de zaalverantwoordelijke een bestelling verwijderen.
- Kan een overzicht opvragen van de lopende reserveringen en tafelstatussen.
- Kan een account aanmaken o.b.v. telefoonnummer in geval dat een klant opduikt die geen smartphone heeft. Deze klant mag dan een reserver tablet van de zaak gebruiken.

### 1.3.3. Ober
- Krijgt een melding van alle inkomende bestellingen van drank (niet van gerechten).
- Kan een overzicht opvragen van alle drank en kan drank beheren (toevoegen, wijzigen en verwijderen). Bij drank staat telkens de prijs per glas, de prijs per fles, de omschrijving, het land van herkomst (optioneel), een categorie (warme dranken, koude dranken, wijn, bier, aperitieven, digestieven). Op de drankenkaart worden de dranken per categorie getoond. De ober kan categorieën beheren.
- Krijgt een overzicht van inkomende bestellingen van drank en van gerechten die klaar staan. De ober kan bestellingen van drank afhandelen: de status wijzigen naar in behandeling of geleverd en bestellingen afhandelen van gerechten die klaarstaan: status op geleverd zetten (geleverde items komen op een virtuele factuur die later door de zaalverantwoordelijke kan worden afgerekend).

### 1.3.4. Kok
- Bepaalt welke gerechten op de menu staan. Voor elk gerecht wordt volgende gegevens ingegeven: naam, ingrediënten, allergeneninformatie, de prijs, categorie (voorgerecht, soepen, hoofdgerecht of dessert). Er is een optie om het gerecht op te nemen als suggestie. De gerechten worden op de menukaart getoond per categorie.
- Krijgt een melding van alle inkomende bestellingen van gerechten (niet van drank) en ziet ook welke dieetwensen of allergieën er opgegeven zijn.
- Kan bestellingen van gerechten afhandelen: status op in behandeling, staat klaar. Deze bestellingen worden chronologisch getoond.

### 1.3.5. Eigenaar
- Kan medewerkers toevoegen, wijzigen, verwijderen en een rol toevoegen.
- Kan alles wat de zaalverantwoordelijke kan.
- Kan overzichten opvragen van de reserveringen (tafelbezetting in percentages), omzet (per dag/week/maand), en feedback (gemiddelde scores) en dit eventueel downloaden via pdf.

## 2.1.3. Use Case Beschrijvingen

### 2.1.3.1. Inloggen
**Functionaliteit:** Als gebruiker kan ik inloggen.  

**Voorwaarde:** De gebruiker heeft een geregistreerd account

**Normaal verloop:**  
- Het systeem toont de loginpagina.  
- De gebruiker voert email en wachtwoord in.  
- Het systeem valideert de inloggegevens.  
- Het systeem toont het hoofdmenu/dashboard van de gebruiker.

**Uitzonderingen:**  
- **Email bestaat niet:** Het systeem toont de foutmelding "Account niet gevonden" en vraagt om terug te gaan naar de loginpagina of naar een registratiepagina (UseCase 4 Account aanmaken).
- **Wachtwoord incorrect:** Het systeem toont de foutmelding "Onjuist wachtwoord".
- **Account inactief:** Het systeem toont de melding dat het account gedeactiveerd is.

**Definition of Done:**  
- De gebruiker is succesvol ingelogd
- De gebruiker heeft toegang tot zijn persoonlijke functionaliteiten

---

### 2.1.3.2. Wachtwoord aanvragen
**Functionaliteit:** Als gebruiker kan ik een nieuw wachtwoord aanvragen via email.  

**Voorwaarde:** De gebruiker heeft een geregistreerd account en het emailadres is gekend in het systeem

**Normaal verloop:**  
- Het systeem toont de "Wachtwoord vergeten" pagina.
- De gebruiker voert zijn emailadres in.
- Het systeem valideert het emailadres.
- Het systeem genereert een unieke resetlink en verstuurt een email met deze resetlink naar de gebruiker.
- De gebruiker ontvangt de email en klikt op de resetlink.
- Het systeem toont een wachtwoord-resetformulier.
- De gebruiker voert een nieuw wachtwoord in (2x ter bevestiging).
- Het systeem valideert en bevestigt het nieuwe wachtwoord.

**Uitzonderingen:**  
- **Email bestaat niet:** Het systeem toont een melding maar verstuurt geen email (veiligheid).
- **Reset link verlopen:** Het systeem toont een melding dat de link niet meer geldig is.
- **Wachtwoorden komen niet overeen:** Het systeem toont een foutmelding.

**Definition of Done:**  
- Het nieuwe wachtwoord is opgeslagen.
- De gebruiker kan inloggen met nieuw wachtwoord.
- De oude resetlinks zijn niet meer geldig.

---

### 2.1.3.3. Tafel reserveren
**Functionaliteit:** Als klant kan ik een tafel reserveren voor een specifieke datum en tijd.

**Normaal verloop:**  
- Het systeem toont het reservatieformulier.
- De klant selecteert een datum en tijd.
- Het systeem toont de beschikbare tijdsloten (lunch van 11u30 tot 12u30, lunch van 12u30 tot 13u30, diner van 17u tot 19u, diner van 19u tot 21u).
- De klant kiest een tijdslot en het aantal personen.
- Het systeem controleert of er nog een tafel beschikbaar is op dat moment.
- De klant voert eventuele speciale verzoeken in.
- Het systeem toont het bevestigingsoverzicht.
- De klant bevestigt de reservatie.
- Het systeem slaat de reservatie op en genereert een reservatienummer.
- Het systeem verstuurt een bevestigingsmail naar de klant.

**Uitzonderingen:**  
- **Niet ingelogd:** Het systeem start de UseCase Inloggen.
- **Geen beschikbare tafels:** Het systeem toont alternatieve tijdstippen.
- **Datum in het verleden:** Het systeem toont een foutmelding.
- **Systeemfout bij opslaan:** Het systeem toont een foutmelding en behoudt de ingevoerde data.

**Definition of Done:**  
- De reservatie is opgeslagen in het systeem.
- De klant heeft een bevestigingsmail ontvangen.
- De reservatie is zichtbaar in het klantprofiel.

---

### 2.1.3.4. Account aanmaken
**Functionaliteit:** Als klant kan ik een account aanmaken.

**Normaal verloop:**  
- Het systeem toont een registratieformulier waar de klant zijn/haar voornaam, achternaam, adres, huisnummer, postcode, gemeente, emailadres en wachtwoord ingeeft.
- Het land wordt gekozen uit een lijst met landen.
- De klant geeft zijn gegevens in en klikt op volgende.
- Het systeem toont een bevestigingspagina.
- De klant controleert zijn gegevens en klikt op volgende.
- Het systeem maakt de klant aan in de database met als rol klant.
- De klant is nu automatisch ingelogd en komt onmiddellijk op het reservatieformulier (UseCase 3 Tafel reserveren).

**Uitzonderingen:**  
- **Emailadres bestaat al:** Het systeem toont een foutmelding en keert terug naar het registratieformulier.
- **Verplichte velden niet ingevuld:** Het systeem toont validatiefouten.
- **Systeemfout bij opslaan:** Het systeem toont een foutmelding en behoudt de ingevoerde data.

**Definition of Done:**  
- De klant is correct opgeslagen in het systeem.
- Het reservatieformulier wordt getoond.

---

### 2.1.3.5. Bestelling plaatsen
**Functionaliteit:** Als klant kan ik gerechten en dranken bestellen via mijn smartphone of tablet.  

**Voorwaarde:** De klant heeft een geldige reservatie, heeft een toegewezen tafel van de zaalverantwoordelijke en is ingelogd.

**Normaal verloop:**  
- Op zijn dashboard, klikt de klant op een bestaande reservatie.
- Het systeem toont het menuoverzicht per categorie (voorgerechten, hoofdgerechten, etc.).
- De klant selecteert de gewenste items uit het menu.
- De klant voegt items toe aan het winkelmandje.
- Het systeem toont het totaalbedrag en het overzicht van de bestelling.
- De klant bevestigt de bestelling.
- Het systeem slaat de bestelling op met een timestamp.
- Het systeem verstuurt een bevestigingsmail naar de klant.
- Het systeem notificeert de kok (voor gerechten) en de ober (voor dranken).

**Uitzonderingen:**  
- **Geen toegewezen tafel:** Het systeem toont de melding om eerst in te checken.
- **Netwerkproblemen:** Het systeem bewaart de conceptbestelling.

**Definition of Done:**  
- De bestelling is opgeslagen met de correcte tafel- en klantgegevens.
- De relevante medewerkers zijn genotificeerd.
- De klant heeft een bevestigingsmail ontvangen.

---

### 2.1.3.6. Enquête ingeven
**Functionaliteit:** Als klant kan ik een review/enquête invullen na mijn restaurantbezoek.

**Voorwaarde:** De klant heeft een afgeronde en betaalde reservatie en heeft de enquête-link ontvangen via email.

**Normaal verloop:**  
- Het systeem toont het enquêteformulier met beoordelingscriteria.
- De klant geeft een score van 1-5 sterren.
- De klant voegt eventueel opmerkingen toe.
- Het systeem valideert de ingevoerde gegevens.
- De klant bevestigt de enquête.
- Het systeem slaat de review op gekoppeld aan de reservatie.
- Het systeem toont een bedankbericht.

**Uitzonderingen:**  
- **Link verlopen:** Het systeem toont de melding dat de enquête niet meer beschikbaar is (tot 2 weken na de reservatiedatum).
- **Enquête al ingevuld:** Het systeem toont een melding met de mogelijkheid tot wijzigen.
- **Verplichte velden niet ingevuld:** Het systeem toont validatiefouten.

**Definition of Done:**  
- De review is opgeslagen gekoppeld aan de juiste reservatie en klant.
- De review is beschikbaar voor rapportage door de eigenaar.
- De klant kan de review later nog aanpassen (binnen een bepaalde termijn).

---

### 2.1.3.7. Account beheren
**Functionaliteit:** Als klant kan ik mijn account beheren.

**Voorwaarde:** De klant is ingelogd.

**Normaal verloop:**  
- Het systeem toont een overzicht van de klantgegevens.
- De klant kan zijn gegevens aanpassen.
- Het systeem slaat de wijzigingen op in de database.

**Uitzonderingen:**  
- **Verwijderen account:** Het systeem maakt alle velden van de klant leeg in de database. Bij de verplichte velden wordt er <<Verwijderd>> geplaatst en de account wordt inactief gezet. De rol van de gebruiker wordt verwijderd.

**Definition of Done:**  
- De klantwijzigingen zijn doorgevoerd.
- De verwijderde gebruiker kan niet meer inloggen.

---

## 2.1.3.8. Gebruikers beheren
**Functionaliteit:** Als eigenaar kan ik medewerkers toevoegen, wijzigen, verwijderen en rollen toewijzen.

**Voorwaarde:** De eigenaar is ingelogd en heeft de rol Eigenaar.

**Normaal verloop:**
- Het systeem toont een overzicht van alle gebruikers en hun rollen.
- De eigenaar selecteert een actie (toevoegen/wijzigen/verwijderen).
- Voor een nieuwe gebruiker voert de eigenaar de gebruikersgegevens in (voornaam, achternaam, email, tijdelijk wachtwoord, rol).
- Het systeem valideert de ingevoerde gegevens.
- De eigenaar bevestigt de actie.
- Het systeem slaat de wijzigingen op.
- Het systeem stuurt een email met een resetlink naar de gebruiker.

**Uitzonderingen:**
- Email reeds in gebruik: Het systeem toont een foutmelding.
- Verplichte velden ontbreken: Het systeem toont validatiefouten.
- Verwijderen account: Het systeem maakt alle velden van de gebruiker leeg in de database. Bij de verplichte velden wordt er <<Verwijderd>> geplaatst en de account wordt inactief gezet. De rol van de gebruiker wordt verwijderd.
- Laatste eigenaar-account wordt verwijderd: Het systeem weigert de actie.

**Definition of Done:**
- De gebruikerswijzigingen zijn doorgevoerd.
- De nieuwe gebruiker kan inloggen (bij toevoegen).
- De verwijderde gebruiker kan niet meer inloggen.

---

## 2.1.3.9. Reservaties beheren
**Functionaliteit:** Als eigenaar kan ik alle reservaties bekijken, wijzigen en beheren.

**Voorwaarde:** De eigenaar is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van alle reservaties (filter op datum/status).
- De eigenaar selecteert een reservatie om te bekijken of wijzigen.
- Het systeem toont de reservatiedetails.
- De eigenaar wijzigt indien nodig de details (datum, tijd, aantal personen).
- Het systeem valideert de wijzigingen.
- De eigenaar bevestigt de wijzigingen.
- Het systeem slaat de wijzigingen op.
- Het systeem verstuurt een wijzigingsmail naar de klant.

**Uitzonderingen:**
- Nieuwe tijd niet beschikbaar: Het systeem toont alternatieve tijden.
- Reservatie al ingecheckt: Het systeem waarschuwt voor de impact van wijzigingen.
- Email versturen faalt: Het systeem toont een waarschuwing maar behoudt de wijzigingen.

**Definition of Done:**
- De reservatiewijzigingen zijn opgeslagen.
- De klant is geïnformeerd over de wijzigingen.
- De planning is bijgewerkt.

---

## 2.1.3.10. Mails beheren
**Functionaliteit:** Als eigenaar kan ik email templates beheren en nieuwsbrieven versturen.

**Voorwaarde:** De eigenaar is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van email templates en de nieuwsbrief functie.
- De eigenaar selecteert een template om te wijzigen of kiest voor een nieuwe nieuwsbrief.
- Het systeem toont de email editor.
- De eigenaar past de inhoud, het onderwerp en de ontvangers aan.
- Het systeem toont een preview van de email.
- De eigenaar test de email (optioneel naar een testadres).
- De eigenaar bevestigt de verzending.
- Het systeem verstuurt de emails naar de geselecteerde ontvangers.

**Uitzonderingen:**
- Geen ontvangers geselecteerd: Het systeem toont een waarschuwing.
- Email service niet beschikbaar: Het systeem toont een foutmelding en bewaart het concept.
- Sommige emails niet verstuurd: Het systeem toont een rapport met gefaalde verzendingen.

**Definition of Done:**
- De emails zijn succesvol verstuurd naar alle ontvangers.
- Het verzendrapport is beschikbaar.
- De templates zijn opgeslagen voor hergebruik.

---

## 2.1.3.11. Parameters beheren
**Functionaliteit:** Als eigenaar kan ik systeemparameters en instellingen beheren.

**Voorwaarde:** De eigenaar is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van alle systeemparameters.
- De eigenaar selecteert een parameter om te wijzigen.
- Het systeem toont de huidige waarde en beschrijving.
- De eigenaar voert de nieuwe waarde in.
- Het systeem valideert de nieuwe waarde.
- De eigenaar bevestigt de wijziging.
- Het systeem slaat de nieuwe parameterwaarde op.
- Het systeem herlaadt indien nodig de configuratie.

**Uitzonderingen:**
- Systeemfout bij opslaan: Het systeem behoudt de oude waarde en toont een foutmelding.
- Parameter wijzigen of verwijderen: Het systeem kan ook een parameter wijzigen of verwijderen.

**Definition of Done:**
- De parameterwijziging is opgeslagen.
- De nieuwe waarde is actief in het systeem.

---

## 2.1.3.12. Enquêtes beheren
**Functionaliteit:** Als eigenaar kan ik enquêtevragen beheren en resultaten bekijken.

**Voorwaarde:** De eigenaar is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van enquêtes en resultaten.
- De eigenaar selecteert een enquête om te wijzigen of bekijkt de resultaten.
- Het systeem toont de enquêtevragen of het resultaten dashboard.
- De eigenaar wijzigt vragen, antwoordopties of bekijkt statistieken.
- Het systeem valideert de wijzigingen.
- De eigenaar bevestigt de wijzigingen.
- Het systeem slaat de wijzigingen op.

**Uitzonderingen:**
- Enquête wordt gebruikt in lopende reservaties: Het systeem waarschuwt voor de impact.
- Ongeldige vraagstructuur: Het systeem toont validatiefouten.

**Definition of Done:**
- De enquêtewijzigingen zijn opgeslagen.
- De nieuwe enquête is beschikbaar voor klanten.
- De rapportage toont actuele gegevens.

---

## 2.1.3.13. Overzichten genereren
**Functionaliteit:** Als eigenaar kan ik overzichten genereren van reservaties, omzet en feedback.

**Voorwaarde:** De eigenaar is ingelogd en er zijn data beschikbaar voor de gevraagde periode.

**Normaal verloop:**
- Het systeem toont het rapportage dashboard.
- De eigenaar selecteert het type rapport (reservaties/omzet/feedback).
- De eigenaar stelt de periode in (dag/week/maand).
- Het systeem genereert het rapport met grafieken en tabellen.
- De eigenaar bekijkt het rapport online.
- De eigenaar kiest de optie om het rapport te downloaden als PDF.
- Het systeem genereert de PDF download.

**Uitzonderingen:**
- Geen data beschikbaar voor de periode: Het systeem toont een melding.
- PDF generatie faalt: Het systeem biedt alternatieve exportformaten.
- Grote dataset: Het systeem toont een progress indicator en verwerkt asynchroon.

**Definition of Done:**
- Het rapport toont actuele en correcte data.
- De PDF is succesvol gedownload.
- Het rapport bevat alle gevraagde informatie.

---

## 2.1.3.14. Welkomstmail versturen
**Functionaliteit:** Als systeem kan ik automatisch welkomstmails versturen aan klanten.

**Voorwaarde:** De klant heeft een reservatie gemaakt en de email service is beschikbaar.

**Normaal verloop:**
- Het systeem detecteert een nieuwe reservatie of een reservatie binnen één week.
- Het systeem haalt de email template voor de welkomstmail op.
- Het systeem vult de template met reservatiegegevens en restaurantinformatie.
- Het systeem verstuurt de email naar de klant.
- Het systeem logt de verzendstatus.
- De klant ontvangt de welkomstmail met praktische informatie.

**Uitzonderingen:**
- Email adres ongeldig: Het systeem logt de fout maar blokkeert de reservatie niet.
- Email service niet beschikbaar: Het systeem probeert later opnieuw.

**Definition of Done:**
- De email is succesvol verstuurd.
- De klant heeft de praktische informatie ontvangen.

---

## 2.1.3.15. Tafels toewijzen
**Functionaliteit:** Als zaalverantwoordelijke kan ik tafels toewijzen.

**Voorwaarde:** De zaalverantwoordelijke is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van alle reservaties, gesorteerd op tafelnummer.
- De zaalverantwoordelijke controleert de reservaties zonder tafeltoewijzing in het systeem.
- Het systeem toont de reservatiedetails en beschikbare tafels voor die datum en het huidige tijdslot.
- De zaalverantwoordelijke selecteert geschikte tafels.
- Het systeem wijzigt de tafelstatus naar gereserveerd.
- Het systeem bevestigt de tafeltoewijzing.
- De klant komt op het gewenste uur naar het restaurant en checkt in.
- De zaalverantwoordelijk controleert de reservatie en zet de tafelstatus op bezet.
- De klant kan plaatsnemen en bestellen.

**Uitzonderingen:**
- Geen reservatie gevonden: De zaalverantwoordelijke maakt een nieuwe reservatie aan (maakt eventueel een nieuwe klant aan), wijst tafels toe aan de klant en zet de tafelstatus op bezet.
- Alle tafels bezet: Het systeem toont de wachttijd en alternatieve opties.

**Definition of Done:**
- De tafel is toegewezen aan de klant.
- De klant kan bestellen via de toegewezen tafel.

---

## 2.1.3.16. Tafels beheren
**Functionaliteit:** Als zaalverantwoordelijke kan ik tafels beheren en het overzicht bijhouden.

**Voorwaarde:** De zaalverantwoordelijke is ingelogd.

**Normaal verloop:**
- Het systeem toont de restaurant plattegrond met alle tafels en of ze actief zijn of niet.
- De zaalverantwoordelijke kiest om een tafel toe te voegen aan het systeem.
- Het systeem toont een formulier om een nieuwe tafel aan te maken.
- De zaalverantwoordelijke geeft een tafelnummer, het aantal personen, het minimum aantal personen en een barcode in.
- De zaalverantwoordelijke kan de tafel ook op actief zetten.
- Het systeem valideert de gegevens en toont een bevestigingsoverzicht.
- De zaalverantwoordelijke bevestigt en het systeem slaat de gegevens op.

**Uitzonderingen:**
- Tafel heeft lopende bestellingen: Het systeem waarschuwt voor de impact.
- Gelijktijdige wijziging door ander personeelslid: Het systeem toont een conflict.
- Tafel verwijderen of wijzigen: De zaalverantwoordelijke kan een tafel wijzigen of verwijderen.

**Definition of Done:**
- De gegevens worden opgeslagen in de database
- De plattegrond toont de actuele situatie.

---

## 2.1.3.17. Bestelling afrekenen
**Functionaliteit:** Als zaalverantwoordelijke kan ik bestellingen afrekenen via verschillende betaalmethoden.

**Voorwaarde:** De zaalverantwoordelijke is ingelogd, er zijn geleverde bestellingen voor een tafel en het betaalsysteem is beschikbaar.

**Normaal verloop:**
- Het systeem toont een overzicht van alle reservaties, gesorteerd per tafel.
- De zaalverantwoordelijke kiest de reservatie van de klant die wil afrekenen.
- Het systeem toont de openstaande factuur, met alle bestellingen, van de reservatie.
- De zaalverantwoordelijke kiest de betaalmethode (Payconiq/cash).
- Voor digitaal initieert het systeem de betaling via de externe service.
- Voor cash bevestigt de zaalverantwoordelijke het ontvangen bedrag.
- Het systeem markeert de factuur als betaald.
- Het systeem verstuurt een bedankmail met de factuur en enquête-link.

**Uitzonderingen:**
- Betaling mislukt: Het systeem toont een foutmelding en behoudt de openstaande factuur.
- Onregelmatigheden: De zaalverantwoordelijke kan items annuleren voor afrekening.
- Email versturen faalt: De factuur blijft geldig, een waarschuwing wordt getoond.

**Definition of Done:**
- De factuur is gemarkeerd als betaald.
- De betaling is verwerkt in het systeem.
- De klant heeft de bedankmail en enquête-link ontvangen.

---

## 2.1.3.18. Bestellingen van gerechten afhandelen
**Functionaliteit:** Als kok kan ik binnenkomende gerechtenbestellingen bekijken en afhandelen.

**Voorwaarde:** De kok is ingelogd en er zijn nieuwe bestellingen van gerechten.

**Normaal verloop:**
- Het systeem toont een chronologisch overzicht van gerechtenbestellingen.
- Het systeem toont dieetwensen en allergieën per bestelling.
- De kok selecteert een bestelling om te verwerken.
- De kok wijzigt de status naar "in behandeling".
- De kok bereidt het gerecht voor.
- De kok wijzigt de status naar "staat klaar".
- Het systeem notificeert de ober dat het gerecht klaar staat.

**Uitzonderingen:**
- Ingrediënt niet beschikbaar: De kok kan het gerecht markeren als onbeschikbaar.

**Definition of Done:**
- De bestellingstatus is correct bijgewerkt.
- De ober is genotificeerd van klaarstaande gerechten.
- Het gerecht is klaar voor servering.

---

## 2.1.3.19. Gerechten beheren
**Functionaliteit:** Als kok kan ik gerechten toevoegen, wijzigen en verwijderen van het menu.

**Voorwaarde:** De kok is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van alle gerechten per categorie.
- De kok selecteert een actie (toevoegen/wijzigen/verwijderen).
- De kok voert de gerecht details in (naam, ingrediënten, allergenen, prijs, categorie).
- De kok markeert het eventueel als suggestie.
- Het systeem valideert de ingevoerde gegevens.
- De kok bevestigt de wijzigingen.
- Het systeem werkt het menu bij.
- Het systeem publiceert de wijzigingen naar het klantmenu.

**Uitzonderingen:**
- Verplichte velden ontbreken: Het systeem toont validatiefouten.
- Gerecht wordt gebruikt in lopende bestellingen: Het systeem waarschuwt.
- Prijs formaat incorrect: Het systeem toont formaat voorbeelden.

**Definition of Done:**
- Het gerecht is opgeslagen met alle details.
- Het menu is bijgewerkt voor klanten.
- De wijziging is direct beschikbaar voor bestellingen.

---

## 2.1.3.20. Categorieën beheren
**Functionaliteit:** Als kok kan ik gerechten categorieën beheren.

**Voorwaarde:** De kok is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van alle categorieën.
- De kok selecteert een actie (toevoegen/wijzigen/verwijderen).
- De kok voert de categorienaam en type in.
- Het systeem valideert de categoriegegevens.
- De kok bevestigt de wijzigingen.
- Het systeem werkt de categorieën bij.

**Uitzonderingen:**
- Categorie bevat gerechten bij verwijdering: Het systeem vraagt om gerechten te herplaatsen.
- Duplicate categorienaam: Het systeem toont een foutmelding.

**Definition of Done:**
- De categoriewijzigingen zijn opgeslagen.
- Het systeem toont de nieuwe lijst van categoriëen.

---

## 2.1.3.21. Drank beheren
**Functionaliteit:** Als ober kan ik dranken toevoegen, wijzigen en verwijderen van de drankenkaart.

**Voorwaarde:** De ober is ingelogd.

**Normaal verloop:**
- Het systeem toont een overzicht van alle dranken per categorie.
- De ober selecteert een actie (toevoegen/wijzigen/verwijderen).
- De ober voert de drankdetails in (naam, prijs beschrijving, categorie, suggestie).
- Het systeem valideert de ingevoerde gegevens.
- De ober bevestigt de wijzigingen.
- Het systeem werkt de drankenkaart bij.
- Het systeem publiceert de wijzigingen naar het klantmenu.

**Uitzonderingen:**
- Verplichte velden ontbreken: Het systeem toont validatiefouten.
- Drank wordt gebruikt in lopende bestellingen: Het systeem waarschuwt.

**Definition of Done:**
- De drank is opgeslagen met alle details.
- De drankenkaart is bijgewerkt voor klanten.
- De wijziging is direct beschikbaar voor bestellingen.

---

## 2.1.3.22. Bestellingen leveren
**Functionaliteit:** Als ober kan ik drankbestellingen en klaarstaande gerechten als geleverd markeren.

**Voorwaarde:** De ober is ingelogd en er zijn bestellingen met status "in behandeling" of "staat klaar".

**Normaal verloop:**
- Het systeem toont een overzicht van te leveren bestellingen.
- Het systeem onderscheidt drankbestellingen en klaarstaande gerechten.
- De ober selecteert een bestelling om te leveren.
- De ober wijzigt de status naar "geleverd".
- Het systeem voegt het item toe aan de virtuele factuur van de tafel.
- Het systeem werkt het bestellingsoverzicht bij.

**Uitzonderingen:**
- Klant niet aanwezig: De ober kan de bestelling verwijderen.
- Verkeerd gerecht geleverd: De ober kan de status terugzetten en een correctie maken.

**Definition of Done:**
- De bestelling is gemarkeerd als geleverd.
- Het item staat op de factuur van de correcte tafel.
- Het bestellingsoverzicht is bijgewerkt.

---

## 2.1.3.23. Mail versturen (EmailService)
**Functionaliteit:** Als systeem kan ik emails versturen via de externe emailservice.
**Voorwaarde:** De EmailService is beschikbaar en de email template en ontvanger zijn gedefinieerd.

**Normaal verloop:**
- Het systeem stelt de email samen met de template en gegevens.
- Het systeem roept de EmailService aan.
- De EmailService valideert het email format.
- De EmailService verstuurt de email.

**Definition of Done:**
- De email is succesvol verstuurd.


## 2.2. Niet-functionele eisen

### 2.2.1. Gebruikerservaring
Het systeem moet functioneren op de meest gebruikte browsers (Chrome, Firefox, Safari, Edge) en het moet responsive zijn en goed werken op mobiele apparaten, tablets en desktops.

### 2.2.2. Beveiliging
Het systeem moet alle gebruikersgegevens versleuteld opslaan en gebruik maken van HTTPS om gegevens tijdens verzending te beveiligen.

### 2.2.3. Layout
De applicatie moet een frisse lay-out hebben, denk hierbij aan tapas / beach / palmbomen / cocktails…

### 2.2.4. Betrouwbaarheid (Reliability) en testbaarheid
De software moet zó geschreven zijn dat unit-, mock- en E2E-testen eenvoudig opgezet kunnen worden (bijvoorbeeld door dependency injection, duidelijke API’s). Het systeem moet voldoende testen bevatten zodat de algehele kwaliteit aantoonbaar beter en betrouwbaarder wordt.