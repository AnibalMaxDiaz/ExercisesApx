const readline = require('readline');
const operaciones = require('./operaciones');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parcearTexto(texto) {
  const partes = texto.split(' ');
  return {
    firstNumber: parseFloat(partes[0]),
    operation: partes[1],
    secondNumber: parseFloat(partes[2])
  };
}

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

function main() {
  rl.question('Ingresa la operación (ej: 100 / 50): ', (input) => {
    const operacionParceada = parcearTexto(input);
    const result = performOperation(operacionParceada);
    console.log("Result:", result);
    rl.close();
  });
}

main();
