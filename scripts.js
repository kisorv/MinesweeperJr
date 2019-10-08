"use strict";

let gamePieces = document.querySelectorAll(".cell");

let random = gamePieces[Math.floor(Math.random() * gamePieces.length)];

random.id = "it";

let grid = document.querySelector(".grid");
grid.addEventListener("click", changeToGreen);
function changeToGreen(event) {
  event.target.classList.add("green");
}

let it = document.querySelector("#it");
it.addEventListener("click", changeToRed);
function changeToRed() {
  it.style.backgroundColor = "red";
  grid.removeEventListener("click", changeToGreen);
  endGame();
}

function endGame() {
  let clickedItems = document.querySelectorAll(".green");
  clickedItems.forEach(item => {
    item.style.backgroundColor = "yellow";
  });
}
