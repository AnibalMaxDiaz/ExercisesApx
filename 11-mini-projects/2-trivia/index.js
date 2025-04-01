const readline = require("readline");
const questions = require("./questions.js");
const playTrivia = require("./game.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia(questions);
