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

const display = () => {
	for (let i = 0; i < 16; i++) {
		let cardContainer = document.createElement("div");
		let newCard = document.createElement("div");
		let front = document.createElement("div");
		let back = document.createElement("div");
		let image = document.createElement("div");
		back.append(image);
		newCard.classList.add("card");
		front.classList.add("front");
		back.classList.add("back");
		cardContainer.classList.add("card-container");
		back.innerText = randomArray[i];
		newCard.setAttribute("data-symbol", randomArray[i]);
		newCard.setAttribute("data-index", i);
		newCard.append(front);
		newCard.append(back);
		newCard.addEventListener("click", handler);
		cardContainer.append(newCard);
		gameBoardDiv.append(cardContainer);
	}
};

display();

console.log(gameBoardDiv);
