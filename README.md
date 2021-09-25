# STEG 2
# Webbutveckling III, moment 5, webbapplikation som konsumerar REST-webbtjänst
## Webbapplikationen kommunicerar med en REST-webbtjänst för att hämta och lagra poster i en MySQL-databas

Webbapplikationen är skapad med HTML, CSS (SCSS) och JavaScript. Kommunikation med REST-webbtjänsten sker med metoden fetch i JavaScript.

Alla poster ur databasen hämtas automatiskt vid laddning med GET-metoden via REST-webbtjänsten och presenteras överst på sidan.

För att lägga till en ny post i databasen används formuläret längst ner på sidan. Alla fält måste fyllas i och vid sparande skickas den nya kursen till databasen med ett POST-anrop via REST-webbtjänsten, och listan överst på sidan uppdateras samtidigt.

<br>

**Länk till publicerad webbapplikation:** https://studenter.miun.se/~sian2001/dt173g/moment5app/

**Länk till den publicerade webbtjänsten** https://studenter.miun.se/~sian2001/dt173g/moment5/rest.php
