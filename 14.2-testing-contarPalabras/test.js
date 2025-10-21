// test.js
// Test file for contarPalabras function
const contarP = require('./contar');
// Here we use the 
function testContarPalabras(){
  contarP('Hello Max! This is a test paragraph make it from the testContarPalabras function') === 13 ? 
  console.log('Test passed') : console.log('Test failed: Expected 13 words, but got ' + contarP('Hello Max! This is a test paragraph make it from the testContarPalabras function') );
}
module.exports = testContarPalabras;
