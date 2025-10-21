// test.js
// Test function to verify the suma function

const suma = require('./suma.js');
function testSuma() {
  const result = suma(2, 3);
  if (result === 5) {
    console.log('Test passed: suma(2, 3) === 5');
  } else {
    console.error('Test failed: suma(2, 3) !== 5');
  }   
}
//testSuma();
module.exports = testSuma;
