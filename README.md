# Eindopdracht: Filmzoeker

### Introductie

Je gaat een een filmzoeker maken!

In dit project ga je een overzicht maken van verschillende films. Over de database hoef je je (nog) geen zorgen te maken! Die hebben wij voor je gemaakt.

Er zitten een aantal films in de database die de gebruiker moet kunnen filteren dmv een aantal filterbuttons. De film naar keuze kan de gebruiker dan vervolgens vinden op IMDB.

## Requirements

Aan deze eisen moet jouw project voldoen:

1. Als gebruiker wil ik een lijst kunnen zien van de beschikbare films **met de poster van de film.**

- Check de data: elke film in de database heeft een link naar de juiste poster.

2. Als gebruiker wil ik bovenaan de pagina kunnen klikken op 5 verschillende filters in de vorm van radio-buttons. De filter functionaliteit wordt hieronder verder toegelicht.

3. Als gebruiker kan ik maar 1 filter tegelijk gebruiken.

- Als ik een ander filter aanklik gaat het andere filter dus weer uit. (Hence de **radiobutton** (1 antwoord mogelijk), in tegenstelling tot een checkbox (meerdere antwoorden mogelijk).

4. Categorie 1: Als gebruiker wil ik kunnen filteren op de categorie **nieuwste films**: van de laatste jaren, dat betekent 2014 of nieuwer.

5. Categorie 2: Als gebruiker wil ik kunnen filters op films met **"Avengers"** in de titel.

6. Categorie 3: Als gebruiker wil ik kunnen filteren op films met **"X-Men"** in de titel.

7. Categorie 4: Als gebruiker wil ik kunnen filteren op films met **"Princess"** in de titel.

8. Categorie 5: Als gebruiker wil ik kunnen filteren op films met **"Batman"** in de titel.

- Gebruik arraymethods voor je filters
- Check of een gedeelte van een string in een andere string aanwezig is met de `.includes()` method.
- De laatste 4 filters lijken heel veel op elkaar. Heb je daar meerdere functies voor nodig? Kan het ook in 1?

9. Als gebruiker kan ik op de poster van de film klikken, waardoor ik naar de juiste IMDB pagina wordt gebracht.

- IMDB werkt met een `id` per film/serie in de URL. Deze ids vind je ook weer terug in onze filmdatabase. Zie bijvoorbeeld: https://www.imdb.com/title/tt0944947/ Pas de URL van IMDB aan en plak het juiste ID erachter.

## Design

Focus je eerst op de functionaliteiten en JavaScript, voordat je gaat beginnen met stylen.

## Bonus Requirements

1. Als gebruiker kan ik in een inputfield de titel van een film invullen, wanneer ik op enter druk worden de films gefilterd op de titel die ik heb ingevuld.

## Tips & Tricks

- Wacht tot de pagina is geladen, voordat je iets met JavaScript gaat doen
- DOM: De DOM veranderen, wacht tot de pagina geladen is
- Styling suggesties:

  - Wil je je pagina graag stylen met CSS-grid? Ja! Graag!
  - Wil je je pagina graag stylen met Flex-box? Ja! Graag!

- Je hebt waarschijnlijk een switch statement nodig. Check de docs.

- **Waar moet ik starten? Hoe moet ik beginnen?** Check ons **stappenplan** (let op: zie onderstaande als een leidraad. Het is geen waarheid, het is een suggestie. Je hoeft je er niet exact aan te houden):

1. Begin met het opzetten van je HTML **structuur**. Wat heb je allemaal nodig?

- Navigatie `<nav>` met meerdere radiobuttons die allemaal `id`, `name`, `value` en `type` nodig hebben. Als je denkt: _**huh had ik dat moeten weten?**_ Dit is allemaal standaard template code die hoort bij een radiobutton. Dat vind je in de documentatie over radiobuttons. Zie mozilla.
  - De radiobuttons hebben allemaal een `<label>` nodig met daar in de titel van de radiobutton, in dit geval dus een naam van een filter.
  - Het is een HTML **structuur:** dat betekent dat de invulling/het inkleuren **nog** niet volledig hoeft te kloppen. Start met de elementen.
  - Onder de `<nav>` wil je een `<main>` maken of een container `<div>` waar alle films in komen te staan. We maken een container omdat we de plaatjes waarschijnlijk willen gaan uitlijnen. Dan moeten ze natuurlijk wel in hun eigen containertje zitten.
  - Maak in de container een een `<ul>`.
  - Je gaat straks met Javascript `<li>` elementen toevoegen aan deze `<ul>`, dus het is top als je deze `<ul>` alvast een goeie id kan geven, waar je hem straks mee kunt selecteren.
  - Optioneel: maak als je wilt nog een header van je pagina en een footer (maar dat hoeft niet)

2. Maak 2 javascript bestanden, 1 met de lijst met movies (die je in een variable `movies` stopt) en 1 voor de rest van je scripts. En voeg deze toe met script tags aan je html pagina. Let op! De ene file gebruikt de ander file. Dus volgorde matters.
3. Check in je scripts file of je alle movies kunt loggen naar je console. Dit zijn de films waar je mee gaat werken. Bekijk de structuur van de data, zodat je een idee hebt van wat je allemaal kunt gaan gebruiken.
4. Oke, laten we eerst eens kijken op welke manier we met JavaScript **alle** beschikbare films op het scherm (dus in de DOM) kunnen krijgen. Het mooiste is als je een functie schrijft die je later ook nog zou kunnen hergebruiken voor je gefiltered movieslist. DUS: schrijf een functie `addMoviesToDom` die 1 argument krijgt: de films. De films die deze functie krijgt, plempt 'ie netjes 1 voor 1 als `li` aan de `ul` vast die je zojuist hebt gemaakt (in stap 1).
   - Stap 1: pak de ul dmv `id` die je zojuist met het maken van je HTML structuur zelf gemaakt hebt.
   - Stap 2: itereer over alle movies in de movie list heen, die deze functie als argument meekrijgt. Je gaat als eerste elke movie in de lijst "omzetten naar" een compleet `<li>` element (een DOM node) met een **`.map`** functie. Die stoppen we vervolgens in een variabel. Het resultaat van de .map functie gaat dus een array met `<li>` elementen zijn.
