"use strict";

// Hex colors digits

const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// Select our DOM elements

const button = document.querySelector("#btn");
const color = document.querySelector(".color");
const tooltip = document.querySelector("#tooltip");

// Event Listener

button.addEventListener("click", () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += letters[randomPick()];
    }

    color.textContent = hexColor;

    document.body.querySelector("main").style.backgroundColor = hexColor;
});

// Random function which selects a number 0 - 16

function randomPick() {
    return Math.floor(Math.random() * letters.length);
}
