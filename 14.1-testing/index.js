// index.js
// Import the suma function and the test function for testing purposes

const suma = require('./suma.js');
const test = require('./test.js');

function main() {
  console.log('Sum´s result: ' + suma(2, 10));
  test();
}
main();