// operaciones.js
// This file returns functions to perform basic arithmetic operations: addition, subtraction, multiplication, and division.

exports.addition = (a, b)=> a + b;
exports.subtract = function(a, b) { return a - b; };
exports.multiply = function(a, b) { return a * b; };
exports.divide = function(a, b) { 
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

