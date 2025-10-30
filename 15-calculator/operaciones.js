// operaciones.js
// This file returns functions to perform basic arithmetic operations: addition, subtraction, multiplication, and division.

exports.addition = (a, b)=> a + b; // Simple addition with arrow function syntax
exports.subtract = function(a, b) { return a - b; }; // Standard function syntax for subtraction
exports.multiply = function(a, b) { return a * b; };
exports.divide = function(a, b) { 
  if (b === 0) { // Handle division by zero
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

