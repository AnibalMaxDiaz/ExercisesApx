// test.js
// Test file for contarPalabras function
const contarP = require('./contar.js');
const assert = require('assert');

function testContarPalabras() {
  const input = 'Hello Max! This is a test paragraph make it from the testContarPalabras function';
  const expected = 13;
  const result = contarP(input);
  // Using assert to compare expected and actual results
  assert.strictEqual(result, expected, `Esperabas ${expected}, pero obtuviste ${result}`);  console.log('✅ testContarPalabras pasó correctamente');
}
module.exports = testContarPalabras;