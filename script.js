"use strict";

let gameBoardDiv = document.querySelector(".game-board");

let startBTN = document.querySelector(".start-btn");

let resetBTN = document.querySelector(".reset-btn");

// let pauseBTN = document.querySelector(".pause");

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let randomArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

let imageArray = [
  "animals/cat_PNG50534.png",
  "animals/goat_PNG13148.png",
  "animals/goose_PNG39.png",
  "animals/hyena_PNG3.png",
  "animals/monkey_PNG18736.png",
  "animals/octopus_PNG30.png",
  "animals/peacock_PNG29.png",
  "animals/raccoon_PNG16975.png",
];

shuffle(randomArray);

let faceUpCards = [];

// let testImage = document.createElement("img");
// testImage.setAttribute("src", "animals/cat_PNG50534.png");
// testImage.classList.add("card-image");
// gameBoardDiv.append(testImage);

const handler = (e) => {
  if (
    !e.currentTarget.classList.contains("flipped") &&
    faceUpCards.length < 2
  ) {
    faceUpCards.push(e.currentTarget);
    e.currentTarget.classList.add("flipped");
    if (faceUpCards.length === 2) {
      if (
        faceUpCards[0].getAttribute("data-symbol") ===
        faceUpCards[1].getAttribute("data-symbol")
      ) {
        setTimeout(() => {
          faceUpCards[0].removeEventListener("click", handler);
          faceUpCards[1].removeEventListener("click", handler);
          faceUpCards[0].classList.add("out");
          faceUpCards[1].classList.add("out");
          faceUpCards = [];
          let outDivs = document.querySelectorAll(".out");
          if (outDivs.length === 16) {
            clearTimeout(t);
          }
        }, 1000);
      } else {
        setTimeout(() => {
          faceUpCards[0].classList.remove("flipped");
          faceUpCards[1].classList.remove("flipped");
          faceUpCards = [];
        }, 1000);
      }
    }
  }
  console.log(faceUpCards);
};

// pauseBTN.addEventListener("click", () => {
//   clearTimeout(t);
// });

const display = () => {
  for (let i = 0; i < 16; i++) {
    let cardContainer = document.createElement("div");
    let newCard = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");
    let image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src", imageArray[randomArray[i]]);
    back.append(image);
    newCard.classList.add("card");
    front.classList.add("front");
    back.classList.add("back");
    cardContainer.classList.add("card-container");
    // back.innerText = randomArray[i];
    newCard.setAttribute("data-symbol", randomArray[i]);
    newCard.setAttribute("data-index", i);
    newCard.append(front);
    newCard.append(back);
    newCard.addEventListener("click", handler);
    cardContainer.append(newCard);
    gameBoardDiv.append(cardContainer);
  }
};
let t;
let startHandler = () => {
  display();
  t = setInterval(setTime, 1000);
  startBTN.removeEventListener("click", startHandler);
};

startBTN.addEventListener("click", startHandler);

resetBTN.addEventListener("click", () => {
  let cardContainerDivs = document.querySelectorAll(".card-container");
  cardContainerDivs.forEach((item) => {
    item.remove();
  });
  shuffle(randomArray);
  faceUpCards = [];
  startBTN.addEventListener("click", startHandler);
});

console.log(gameBoardDiv);

let timer = document.querySelector(".timer");
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
