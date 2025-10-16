// Exercise 12.2 - Read File with Node.js
// index.js
const fs = require('fs');
fs.readFile('./ejemplo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.slice(53));
});
// Run this file using Node.js to see the contents of ejemplo.txt printed to the console.
// Command: node index.js
