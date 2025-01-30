# Portfolio Project

## Projektbeskrivning
Detta är en portfoliosida som presenterar mina projekt och mitt CV. Sidan är byggd med HTML, CSS och JavaScript, och hämtar projekt från både en lokal JSON-fil och GitHub API.

### Funktionalitet
CV-sektion: Dynamiskt inläst från en JSON-fil och visas med en interaktiv modal-popup.
Project-sektion:
Hämtar och visar två projekt från projects.json.
Hämtar och visar två projekt från GitHub API.
Responsiv design: Anpassad för både mobil och desktop.

## Teknologier
HTML, CSS, JavaScript
GitHub API för att hämta publika projekt
JSON för lagring av CV och lokala projekt

## Instruktioner
1. Klona detta repository:
   ```bash
   git clone https://github.com/Saif-SS/your-repo.git

2. Öppna index.html i en webbläsare eller kör via **Live Server** i VS Code.


## Reflektion & Frågor
Vad kan man utveckla med hjälp av JavaScript inom frontend?
JavaScript är ett kraftfullt språk för frontendutveckling och används för att skapa interaktivitet på webbsidor. Med hjälp av JavaScript kan man:
- Manipulera DOM-strukturen dynamiskt.
- Implementera användarinteraktioner som knappar, modaler och animationer.
- Hämta och skicka data med Fetch API.
- Arbeta med tredjeparts-API:er, som GitHub API i detta projekt.
- Skapa single-page applications (SPA) med ramverk som React och Vue.

## Vad är JSON och hur används det inom frontend?
JSON (JavaScript Object Notation) är ett lättviktigt dataformat som används för att lagra och överföra data mellan en klient och en server. Inom frontend används JSON för att:
- Lagra och hantera strukturerad data, t.ex. CV-information i detta projekt.
- Skicka och ta emot data från API:er, som när vi hämtar projekt från GitHub API.
- Lagra konfigurationsinställningar eller lokal data i localStorage.

JSON är enkelt att läsa och skriva för både människor och maskiner, och det är det vanligaste dataformatet för webbtjänster.

## Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
HTTP (HyperText Transfer Protocol) är grunden för kommunikation på webben. Det används för att skicka och ta emot data mellan klienten (webbläsaren) och servern. Som frontendutvecklare är det viktigt att förstå:
- HTTP-förfrågningar och svar (GET, POST, PUT, DELETE) för att kunna hämta och skicka data.
- Statuskoder (200 OK, 404 Not Found, 500 Server Error) för att hantera fel och lyckade förfrågningar.
- CORS (Cross-Origin Resource Sharing) som påverkar hur vi kan göra API-förfrågningar från olika domäner.
- Säkerhet (HTTPS, autentisering, tokens) för att skydda användardata.

Kunskap om HTTP gör det möjligt att bygga mer optimerade och säkra webblösningar.

## Förbättringsmöjligheter
- Lägga till fler interaktiva effekter.
- Förbättra UI-designen.
- Implementera fler API-integrationer.
