"use strict";

let gameBoardDiv = document.querySelector(".game-board");
let gameBoard = [];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let randomArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

shuffle(randomArray);

let faceUpCards = [];

for (let i = 0; i < 16; i++) {
  let newCard = document.createElement("div");
  let front = document.createElement("div");
  let back = document.createElement("div");
  newCard.classList.add("card");
  front.classList.add("front");
  back.classList.add("back");
  back.innerText = randomArray[i];
  newCard.setAttribute("data-symbol", randomArray[i]);
  newCard.setAttribute("data-index", i);
  newCard.append(front);
  newCard.append(back);
  newCard.addEventListener("click", (e) => {
    newCard.classList.toggle("flipped");
    // if (
    //   (faceUpCards.length === 1 &&
    //     faceUpCards[0].getAttribute("data-index") !=
    //       e.target.getAttribute("data-index")) ||
    //   faceUpCards.length === 0
    // ) {
    //   faceUpCards.push(newCard);
    //   if (faceUpCards.length === 2) {
    //     if (
    //       faceUpCards[0].getAttribute("data-symbol") ===
    //       faceUpCards[1].getAttribute("data-symbol")
    //     ) {
    //     }
    //   }
    // }
    // console.log(faceUpCards);
  });
  gameBoardDiv.append(newCard);
  gameBoard.push(newCard);
}

/*
let cardDiv = document.querySelectorAll(".card");



let display = () => {
  cardDiv.forEach((card, index) => {
    card.setAttribute("data-symbol", gameBoard[index].symbol);
    // place.innerText = gameBoard[index].symbol;
    card.addEventListener("click", (e) => {
      console.log("hello");
      if (
        (faceUpCards.length === 1 && e.target != faceUpCards[0]) ||
        faceUpCards.length === 0
      ) {
        e.target.classList.toggle("flipped");
        //////////////////////////////////
        faceUpCards.push(e.target);
        if (faceUpCards.length === 1) {
          e.target.classList.add("yellow");
          e.target.innerText = e.target.getAttribute("data-symbol");
        } else {
          faceUpCards[0].classList.remove("yellow");
          faceUpCards[1].innerText = faceUpCards[1].getAttribute("data-symbol");
          if (
            faceUpCards[0].getAttribute("data-symbol") ===
            faceUpCards[1].getAttribute("data-symbol")
          ) {
            faceUpCards[0].classList.add("green");
            faceUpCards[1].classList.add("green");
            setTimeout(() => {
              faceUpCards[0].classList.remove("green");
              faceUpCards[1].classList.remove("green");
              faceUpCards[0].innerText = "";
              faceUpCards[1].innerText = "";
              faceUpCards = [];
            }, 1000);
          } else {
            faceUpCards[0].classList.add("red");
            faceUpCards[1].classList.add("red");

            setTimeout(() => {
              faceUpCards[0].classList.remove("red");
              faceUpCards[1].classList.remove("red");
              faceUpCards[0].innerText = "";
              faceUpCards[1].innerText = "";
              faceUpCards = [];
            }, 1000);
          }
        }
        console.log(faceUpCards);
      }
    });
  });
};

display();
*/
