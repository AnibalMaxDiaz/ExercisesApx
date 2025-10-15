// index.js
// Main file to start the trivia game

const readline = require("readline");
const questions = require("./questions");
const playTrivia = require("./game");

console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia(questions);
