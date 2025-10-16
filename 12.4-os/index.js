// index.js
// in this exercise, we will use the 'os' module to get the total amount of RAM in the system and print it to the console.

// Import the 'os' module   
const os = require('os');

// Obtain the total amount of RAM in bytes
const totalMemoria = os.totalmem();

// Show the total amount of RAM in the console
console.log(`La cantidad total de memoria RAM es ${totalMemoria} bytes`);