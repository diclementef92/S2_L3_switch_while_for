const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "40",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "36",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "20",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
let characters = [];

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}
console.log("esercizio2: characters->", characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/
let femaleCharacters = [];
let propertyTodelete = ["height", "mass", "skin_color", "birth_year", "gender"];
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    let personaggioFemminile = starWarsCharacters[i];

    for (let j = 0; j < propertyTodelete.length; j++) {
      delete personaggioFemminile[propertyTodelete[j]];
    }
    femaleCharacters.push(personaggioFemminile);
  }
}
console.log("esercizio3: female characters->", femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/
let eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

console.log("esercizio 4:", eyeColor);

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/

// let colors = Object.keys(eyeColor);
// console.log("keys di eyecolor", colors);

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;

    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;

    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;

    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;

    case "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;

    default:
      break;
  }
}
console.log("Esercizio 5: ", eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/
let i = 0;
let massaTotale = 0;
while (i < starWarsCharacters.length) {
  if (Number(starWarsCharacters[i].mass) != undefined) {
    massaTotale += Number(starWarsCharacters[i].mass);
    i++;
  }
}
console.log("Esercizio 6: massa totale", massaTotale);

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
console.log("Esercizio 7:");
switch (massaTotale !== undefined) {
  case massaTotale < 500:
    console.log("Ship is under loaded");
    break;
  case massaTotale === 500:
    console.log("Ship is half loaded");
    break;
  case massaTotale > 700 && massaTotale < 900:
    console.log("Warning: Load is over 700");
    break;
  case massaTotale > 900 && massaTotale < 1000:
    console.log("Critical Load: Over 900");
    break;
  case massaTotale > 1000:
    console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
    break;
  default: //caso di massatotale tra 500 e 700
    console.log("Ship load is:", massaTotale);
    break;
}

/* ESERCIZIO 8

Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/
console.log("Esercizio 8");
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    // console.log("trovato gender n/a");
    starWarsCharacters[i].gender = "robot";
  }
}
console.log(starWarsCharacters);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto, crea un console.log() per controllare la proprietà length di "characters" prima e dopo l'operazione
*/

/* EXTRA ESERCIZIO 10

Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/

let personaggio = starWarsCharacters[0];
let descrizione =
  "Mi chiamo " +
  personaggio.name +
  " sono alto " +
  personaggio.height +
  "cm sono nato nell'anno stellare numero " +
  personaggio.birth_year +
  "i miei capelli sono " +
  personaggio.hair_color;

console.log("esercizio 10:", descrizione);
