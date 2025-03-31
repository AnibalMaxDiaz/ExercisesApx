const readline = require("readline");
import questions from "./questions.js";
import playTrivia from "./game.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia(questions);
