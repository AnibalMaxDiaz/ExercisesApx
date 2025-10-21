// index.js
// Main file

const contarP = require('./contar.js');
const test = require('./test.js');

function main() {
  console.log('This phrase has ' + contarP('Hello Max! This is a test paragraph.') + ' words.');
  test();
}
main();