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
   - Stap 3: in de map functie, voor elke movie, maak een `li` en stop er even tijdelijk de titel van de movie in als string (we gaan het later wel een plaatje maken).
   - Stap 4: buiten de `.map` functie: zet de hele verse gemaakte array met `<li>`'s in de DOM door elke `li` aan de `ul` te plakken. Onze suggestie: gebruik een **`.forEach`** loop.
   - Stap 5: **check** even of je nu een hele mooi lijst met filmtitels op je scherm krijgt.
   - Stap 6: nu je de titel hebt getoond in de DOM, wordt de movie poster natuurlijk simpel! In plaats van een text aan de `li` toevoegen, ga je nu een `img` maken, waarvan de src het attribute movie.Poster wordt*. *let op de data van de films is met hoofdletters gemaakt (je kan meestal niks doen aan het format waarin je jouw data krijgt).
   - Nice! Nu je alle films als plaatje op je scherm hebt, laten we gaan kijken hoe we die films kunnen gaat filteren. Maar voordat we dat doen laten we even een best practice meteen in gang zetten: we gaan de filmlijst pas in de DOM zetten op het moment dat de content geladen is. Met andere woorden, je wilt de `addMoviesToDom(movies)` pas callen nadat het document geladen is. Zie ook nog:

   DOM: De DOM veranderen, wacht tot de pagina geladen is

5. Oke, dan nu echt, we gaan iets doen op het moment dat er geklikt wordt op een van de radiobuttons. Er zijn 5 verschillende buttons waar op geklikt kan worden, waar allemaal een Eventlistener aan vastgemaakt moet worden. _Hmm.... dat klinkt als herhaaldelijk werk.... Daar houden we niet van ⇒ array methods!_ Maak alle radiobuttons compleet in je HTML (het moeten er 5 zijn). Geef ze allemaal **secuur** en **consistent** juiste waardes voor de `type`, `id`, `name` en `value` . Het is handig als je die allemaal in lower-case houdt, e.g "princess-films". Dat is prettig werken. De naam in de label tags kun je uiteraard wel hoofdletters schrijven.
6. Maak een functie `addEventListeners()`, deze functie wordt afgevuurd op het moment dat de content is geladen, en voegt een event toe aan elk van de radiobuttons.
   1. Selecteer **alle** radiobuttons hoe jij dat wilt, bijvoorbeeld doordat ze allemaal de name `film-filter` gekregen hebben.
   2. itereer vervolgens over de elementen en maak er een **event** aan vast.
   3. Welk event heb je nodig? Allereerst zou je misschien aan het click event denken, maar bij radiobuttons geeft een klik vaak een onverwacht effect. De klik wordt namelijk ook geregistreerd als je niet het bolletje hebt aangevinkt. Dus: gebruik het **change** event. Dan gebeurt er pas iets als het bolletje van de radiobutton aan of uit is gevinkt.
   4. Gebruik `console.log()` om te checken of je event werkt.
7. Maak een functie `handleOnChangeEvent()` met als argument het woord "event" die afgevuurd wordt als er een change heeft plaatsgevonden bij een van de radiobuttons. Ergo: de radiobutton is aangevinkt.
8. In de `handleOnChangeEvent()` functie, gebruik console.log(event.target) om uit te vinden op welke radio button er geklikt is. Google even hoe je een `event` doorspeelt naar een functie en wat het `event object` precies is (laat je niet overweldigen door de vele mogelijkheden. Je wilt event.target gebruiken, zoals je ook in heel veel voorbeelden online gaat terug zien). **Check** en controleer of je in deze functie het juiste element ontvangt dat je verwacht wanneer je de radiobutton aanvinkt.
9. Wanneer het de "latest movies" button is aangevinkt wil je iets gaan doen, of wanneer het 1 van alle andere filter is aangeklikt wil je **iets anders** gaan doen. Poeh, dat klinkt als veel opties... We kunnen het oplossen met if...else if... else if.... Dat kan. De schoonste oplossing hier is een `switch()` statement maken.
10. Maak in de `handleOnChangeEvent()` functie een switch statement, die iets gaat doen afhankelijk van welk filter is aangeklikt. Het onderwerp van switch kan bijvoorbeeld zijn `event.target.value` , dat is het value attribute van je input veld, die je zojuist zelf zo'n fijne lowercase waarde hebt gegeven hierboven. Maak voor je 5 verschillende filters, ook 5 verschillende cases en een default case, bijvoorbeeld: "princess-films", "x-men-films", "avenger-films", "batman-films", "latest-films". Schrijf voor elke case, voor de break statement, even een `console.log("hey ik ben {vul film naam in} film")`. **En check of je switch goed werkt en doet wat je verwacht.** Klik lekker rond op die radiobuttons.
11. Je voel hem al aangekomen, he? Je wil nu in plaats van console.loggen ook echt iets gaan doen in je switch statement. Maak een functie die `filterMovies` heet met als argument `wordInMovieTitle`. Begin met 1 implementatie, bijvoorbeeld princess-films. In je switch statement gaat de functie `filterMovies()` af, met als argument het juiste woord om op de filteren. In dit geval dus bijvoorbeeld `filterMovies("Princess")`.
12. Schrijf de `filterMovies` functie. Deze gaan we niet helemaal voor je uitschrijven, maar wat je wilt doen: check of het woord voorkomt in de titel van een movie. Je houdt nu een lijst met gefilterde films over. Roep als laatste stap in deze `filterMovies` , de functie aan van stap 4 `addMoviesToDom()` maar dan nu met je gefilterde filmlijst, in plaats van de hele filmlijst.
13. Je filter functionaliteit werkt. **(Dat heb je gecheckt)** Voeg de `filterMovies()` functie nu met het juiste argument toe aan alle andere **relevante** switch statements.
14. Er blijft nog 1 case over namelijk filter the latest movies. Maak hier een nieuwe functie voor `filterLatestMovies` deze functie krijgt geen argumenten, maar op het moment dat deze wordt aangeroepen plaats deze functie standaard alleen de films in de DOM die van 2014 of nieuwer zijn. Doe die op dezelfde manier als filterMovies(), alleen de filtermethode is anders.
15. Je zal merken dat er een klein bugje in zit op deze manier, alle gefilterde movies worden aan elkaar geplakt. Je wilt dus waarschijnlijk op het moment dat je `addMoviesToDom()` aanroept, als allereerst alle films die er **tot nu toe** in de `ul` staan eerst verwijderen. En daarna de nieuwe gefilterde lijst er pas in plakken.
16. Werken je filters?? Mooi dan alleen nog de laatste requirement: naast een `<img>` tag wil je de posters van de films wrappen in een `<a>` met als `href` de link van IMDB + de `imdbID` ....Hmm... dat wordt misschien wel een hele lange onleesbare functie zo in die forEach loop... Schrijf dus een aparte functie die `imdbID` van de movie als argument krijgt en de juiste URL returned (je mag zelf een naam bedenken). Deze zet je vervolgens in de `href` attribute van de `<a>`.
    De hierarchie die we hier dus gaan maken is: `ul > li > a > img`
17. Klaar met je functionaliteiten? Dat kun je gaan stylen! :)

## Database

```javascript
onst movies = [

{

Title: "X-Men: Days of Future Past",

Year: "2014",

imdbID: "tt1877832",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

},

{

Title: "X-Men: First Class",

Year: "2011",

imdbID: "tt1270798",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg"

},

{

Title: "X-Men",

Year: "2000",

imdbID: "tt0120903",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

},

{

Title: "X2: X-Men United",

Year: "2003",

imdbID: "tt0290334",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg"

},

{

Title: "X-Men: The Last Stand",

Year: "2006",

imdbID: "tt0376994",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"

},

{

Title: "X-Men Origins: Wolverine",

Year: "2009",

imdbID: "tt0458525",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"

},

{

Title: "X-Men: Apocalypse",

Year: "2016",

imdbID: "tt3385516",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg"

},

{

Title: "X-Men: The Animated Series",

Year: "1992–1997",

imdbID: "tt0103584",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"

},

{

Title: "X-Men: Evolution",

Year: "2000–2003",

imdbID: "tt0247827",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BOWMyMThhN2UtMGMzYi00ODVmLWFlODItYmZlMzMxYzE3MmZkXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"

},

{

Title: "Wolverine and the X-Men",

Year: "2008–2009",

imdbID: "tt0772145",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BNzk4Nzg3NjMyMV5BMl5BanBnXkFtZTcwMjk3MjU0Mg@@._V1_SX300.jpg"

},

{

Title: "The Avengers",

Year: "2012",

imdbID: "tt0848228",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"

},

{

Title: "Avengers: Infinity War",

Year: "2018",

imdbID: "tt4154756",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"

},

{

Title: "Avengers: Age of Ultron",

Year: "2015",

imdbID: "tt2395427",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"

},

{

Title: "Avengers: Endgame",

Year: "2019",

imdbID: "tt4154796",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"

},

{

Title: "The Avengers",

Year: "1998",

imdbID: "tt0118661",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"

},

{

Title: "The Avengers: Earth's Mightiest Heroes",

Year: "2010–2012",

imdbID: "tt1626038",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"

},

{

Title: "Ultimate Avengers",

Year: "2006",

imdbID: "tt0491703",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg"

},

{

Title: "Ultimate Avengers II",

Year: "2006",

imdbID: "tt0803093",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"

},

{

Title: "The Avengers",

Year: "1961–1969",

imdbID: "tt0054518",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"

},

{

Title: "Batman Begins",

Year: "2005",

imdbID: "tt0372784",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"

},

{

Title: "Batman v Superman: Dawn of Justice",

Year: "2016",

imdbID: "tt2975590",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

},

{

Title: "Batman",

Year: "1989",

imdbID: "tt0096895",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"

},

{

Title: "Batman Returns",

Year: "1992",

imdbID: "tt0103776",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"

},

{

Title: "Batman Forever",

Year: "1995",

imdbID: "tt0112462",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"

},

{

Title: "Batman & Robin",

Year: "1997",

imdbID: "tt0118688",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"

},

{

Title: "The Lego Batman Movie",

Year: "2017",

imdbID: "tt4116284",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"

},

{

Title: "Batman: The Animated Series",

Year: "1992–1995",

imdbID: "tt0103359",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"

},

{

Title: "Batman: Under the Red Hood",

Year: "2010",

imdbID: "tt1569923",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"

},

{

Title: "Batman: The Dark Knight Returns, Part 1",

Year: "2012",

imdbID: "tt2313197",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"

},

{

Title: "The Princess Bride",

Year: "1987",

imdbID: "tt0093779",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg"

},

{

Title: "Princess Mononoke",

Year: "1997",

imdbID: "tt0119698",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"

},

{

Title: "The Princess Diaries",

Year: "2001",

imdbID: "tt0247638",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

},

{

Title: "The Princess and the Frog",

Year: "2009",

imdbID: "tt0780521",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg"

},

{

Title: "The Princess Diaries 2: Royal Engagement",

Year: "2004",

imdbID: "tt0368933",

Type: "movie",

Poster:

"https://m.media-amazon.com/images/M/MV5BODljNTU2ZGMtMWI5Yy00MGNkLTg2MTktN2NhZjY0NDcwMDhiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"

},

{

Title: "Xena: Warrior Princess",

Year: "1995–2001",

imdbID: "tt0112230",

Type: "series",

Poster:

"https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"

}

];

```
