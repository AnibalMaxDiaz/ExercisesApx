const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["1. Berlín", "2. Madrid", "3. París", "4. Roma"],
    answer: 3,
  },
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    options: ["1. 7", "2. 8", "3. 9", "4. 10"],
    answer: 2,
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["1. 1965", "2. 1969", "3. 1972", "4. 1959"],
    answer: 2,
  },
];

let score = 0;
let index = 0;

function playTrivia() {
  if (index < questions.length) {
    const q = questions[index];
    console.log(`\nPregunta ${index + 1}: ${q.question}`);
    q.options.forEach((option) => console.log(option));

    rl.question("Tu respuesta (ingresa el número): ", (respuesta) => {
      if (parseInt(respuesta) === q.answer) {
        console.log("\x1b[32m¡Correcto!\x1b[0m");
        score++;
      } else {
        console.log("\x1b[31mIncorrecto.\x1b[0m");
      }
      index++;
      playTrivia(); // Llamar recursivamente para la siguiente pregunta
    });
  } else {
    console.log(`\nTu puntuación final es: ${score} de ${questions.length}`);
    rl.close();
  }
}

console.log("¡Bienvenido a la Trivia de Node.js!");
playTrivia();
