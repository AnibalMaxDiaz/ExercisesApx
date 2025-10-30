// index.js
// This is the main file that uses the operaciones module to perform arithmetic operations based on user input.
// It reads a string input, parses it, and calls the appropriate function from operaciones.js.

const readline = require('readline');
const operaciones = require('./operaciones');
// Setting up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Function to parse the input string into an object with two numbers and an operation symbol
function parcearTexto(texto) {
  const partes = texto.split(' ');
  return {
    firstNumber: parseFloat(partes[0]),
    operation: partes[1],
    secondNumber: parseFloat(partes[2])
  };
}
// Function to perform the operation based on the parsed object using a dictionary to map symbols to functions
function performOperation(objetoOperacion) {
  const dictionary = {
    '+': operaciones.addition,
    '-': operaciones.subtract,
    '*': operaciones.multiply,
    '/': operaciones.divide
  };
  const symbol = objetoOperacion.operation;
  const operationFunction = dictionary[symbol];
  return operationFunction(objetoOperacion.firstNumber, objetoOperacion.secondNumber);
}
// Main function to get user input and display the result
function main() {
  rl.question('Ingresa la operación (ej: 100 / 50): ', (input) => {
    const operacionParceada = parcearTexto(input);
    const result = performOperation(operacionParceada);
    console.log("Result:", result);
    rl.close();
  });
}

main();
