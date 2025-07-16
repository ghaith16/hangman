// Letters
const letters = "abcçdefgğhıİjklmnoöprsştuüvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = `letter-box`;

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  Laliga: [
    "Kylian Mbappe",
    "Robert Lewandowski",
    "Raphinha",
    "Lamine Yamal",
    "Pedri",
    "Fede Valverde",
    "Jude Bellingham",
    "Vinicius Junior",
    "Ayoze Perez",
    "Ante Budimir",
    "Oihan Sancet",
    "Alex Baena",
    "Inigo Martinez",
    "Sergi Cardona",
    "Isco",
    "Nico Williams",
    "Unai Simon",
    "Jan Oblak",
    "Thibaut Courtois",
    "Alexander Sorloth",
    "Julian Alvarez",
    "Dodi Lukebakio",
    "Kike Garcia",
    "Javi Puado",
    "Marcos Llorente",
    "Aurelien Tchouameni",
    "Rodrygo",
    "Antony",
    "Joao Felix",
    "Koke",
    "Anssumane Fati",
    "Antoine Griezmann",
    "Alvaro Garcia",
    "Oliver McBurnie",
    "Oscar Mingueza",
    "Bryan Zaragoza",
    "Giuliano Simeone",
    "Marc Casado",
    "Pablo Barrios",
    "Martin Zubimendi",
    "Federico Valverde",
    "Joan Garcia",
    "Robert Lewandowski",
    "Vinicius Junior",
  ],
  Türk_Futbolcu: [
    "Arda Güler",
    "Kenan Yıldız",
    "Hakan Çalhanoğlu",
    "Cengiz Ünder",
    "İrfan Can Kahveci",
    "Merih Demiral",
    "Çağlar Söyüncü",
    "Zeki Çelik",
    "Orkun Kökçü",
    "Enes Ünal",
    "Kerem Aktürkoğlu",
    "Barış Alper Yılmaz",
    "Salih Özcan",
    "Abdülkerim Bardakçı",
    "Mert Günok",
    "Altay Bayındır",
    "Uğurcan Çakır",
    "Yusuf Yazıcı",
    "Ozan Kabak",
    "Ferdi Kadıoğlu",
    "Taylan Antalyalı",
    "Rıdvan Yılmaz",
    "Halil Dervişoğlu",
    "Emre Mor",
    "Okay Yokuşlu",
    "Serdar Dursun",
    "Berkay Özcan",
    "Arda Turan",
    "Emre Belözoğlu",
    "Nihat Kahveci",
    "Tayfur Bingöl",
  ],
  Premier_Lig: [
    "Mohamed Salah",
    "Alisson",
    "Giorgi Mamardashvili",
    "Joe Gomez",
    "Ibrahima Konate",
    "Kostas Tsimikas",
    "Andy Robertson",
    "Conor Bradley",
    "Jeremie Frimpong",
    "Milos Kerkez",
    "Wataru Endo",
    "Dominik Szoboszlai",
    "Alexis Mac Allister",
    "Curtis Jones",
    "Harvey Elliott",
    "Ryan Gravenberch",
    "Stefan Bajcetic",
    "Trey Nyoni",
    "Florian Wirtz",
    "Luis Diaz",
    "Darwin Nunez",
    "Federico Chiesa",
    "Cody Gakpo",
    "Jayden Danns",
    "Alexander Isak",
    "Erling Haaland",
    "Bukayo Saka",
    "Declan Rice",
    "Bruno Fernandes",
    "Cole Palmer",
    "William Saliba",
    "Rodri",
    "Jeremy Doku",
    "Bruno Guimaraes",
    "Martin Odegaard",
    "Daniel Munoz",
    "Phil Foden",
    "James Maddison",
    "Jack Grealish",
    "Jamie Vardy",
    "Ben Mee",
    "Nick Pope",
    "Jordan Pickford",
    "David Raya",
    "Daniel Amartey",
    "Jack Harrison",
    "Wilfried Zaha",
    "Matheus Cunha",
    "Yoane Wissa",
    "Ollie Watkins",
    "Gabriel Martinelli",
    "Ryan Fraser",
    "Raheem Sterling",
    "Dominic Calvert Lewis",
    "Anthony Elanga",
    "Thierno Barry",
    "Youri Tielemans",
    "Gabriel Magalhaes",
    "John Stones",
    "Kalidou Koulibaly",
    "Kieran Trippier",
    "Reece James",
    "Joao Cancelo",
    "Marc Cucurella",
    "Conor Coady",
    "Hugo Lloris",
  ],
  Seria_A: [
    "Lautaro Martinez",
    "Rafael Leao",
    "Nicolo Barella",
    "Alessandro Bastoni",
    "Theo Hernandez",
    "Mike Maignan",
    "Gleison Bremer",
    "Dusan Vlahovic",
    "Hakan Çalhanoğlu",
    "Marcus Thuram",
    "Federico Dimarco",
    "Giovanni Di Lorenzo",
    "Amir Rrahmani",
    "Scott McTominay",
    "Mateo Retegui",
    "Artem Dovbyk",
    "Teun Koopmeiners",
    "Ademola Lookman",
    "Mattia Zaccagni",
    "Paulo Dybala",
    "Yann Sommer",
    "Benjamin Pavard",
    "Manuel Locatelli",
    "Lorenzo Pellegrini",
    "Fikayo Tomori",
    "Ciro Immobile",
    "Christian Pulisic",
    "Riccardo Sottil",
    "Riccardo Orsolini",
    "Lorenzo Pellegrini",
  ],
};

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    emptySpan.className = "with-space";
  }

  lettersGuessContainer.appendChild(emptySpan);
});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

let guses = [];

document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {
      if (theClickedLetter == wordLetter) {
        theStatus = true;

        guessSpans.forEach((span, spanIndex) => {
          if (WordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
            guses.push(theClickedLetter);
          }
        });
      }
    });

    // Outside Loop

    if (theStatus !== true) {
      wrongAttempts++;

      theDraw.classList.add(`wrong-${wrongAttempts}`);

      document.getElementById("fail").play();

      if (wrongAttempts === 8) {
        endGame();

        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
      if (guses.length === theChosenWord.filter((s) => s !== " ").length) {
        endGameSuccess();
      }
    }
  }
});

// End Game Func

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Maalesef Bilemedin Bir Dahakine - ${randomValueValue} -`
  );

  div.appendChild(divText);

  div.className = "popup";
  document.body.appendChild(div);
}

function endGameSuccess() {
  let div = document.createElement("div");
  let divText = document.createTextNode(`Tebrikler Muhteşemsin`);

  div.appendChild(divText);

  div.className = "popupSucces";
  document.body.appendChild(div);
}
