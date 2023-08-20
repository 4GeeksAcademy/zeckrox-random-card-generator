let superContainer = document.querySelector(".super-container");
let icons = ["♦", "♥", "♠", "♣"];
let randomIcon = "";
let numbers = [
  "J",
  "Q",
  "K",
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10"
];
let cardCounter = 0;
let divContainer = "";
let card = "";
let p = "";
let timer = 0;

//RANDOMIZER FUNCTIONS START
function iconGenerator() {
  randomIcon = icons[parseInt(Math.random() * icons.length)];
  if (randomIcon == icons[0] || randomIcon == icons[1]) {
    p.style.color = "red";
    return randomIcon;
  }
  return randomIcon;
}
function iconChecker() {
  if (randomIcon == icons[0] || randomIcon == icons[1]) {
    p.style.color = "red";
    return randomIcon;
  }
  return randomIcon;
}
function randomNumber() {
  return numbers[parseInt(Math.random() * numbers.length)];
}
//RANDOMIZER FUNCTIONS END

function cardBuilder() {
  if (cardCounter == 0 || cardCounter % 5 == 0) {
    divContainer = document.createElement("div");
    divContainer.style.display = "flex";
    divContainer.style.justifyContent = "center";
    superContainer.appendChild(divContainer);
  }
  card = document.createElement("div");
  card.className = "card";
  divContainer.appendChild(card);
  p = document.createElement("p");
  p.className = "card-icon icon-top";
  p.innerHTML = iconGenerator();
  card.appendChild(p);
  p = document.createElement("p");
  p.className = "card-number";
  p.innerHTML = randomNumber();
  card.appendChild(p);
  p = document.createElement("p");
  p.className = "card-icon icon-bottom";
  p.innerHTML = iconChecker();
  card.appendChild(p);
  cardCounter++;
}

for (let i = 0; i < 1; i++) {
  cardBuilder();
}

let button = document.querySelector(".generate-button");
button.addEventListener("click", cardBuilder);

let timerStart = document.querySelector(".timer-start");
let timerCount = document.querySelector(".timer");

timerStart.addEventListener("click", function() {
  timerStart.style.display = "none";
  timerCount.style.display = "inline";
  setInterval(() => {
    timerCount.innerHTML = timer;
    timer++;
    if (timer === 11) {
      cardBuilder();
      timer = 1;
    }
  }, 1000);
});
