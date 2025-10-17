// index.js
// Ejercicio 12.6: Crear un hash MD5 de una cadena de texto usando el módulo 'crypto' de Node.js

// Importamos el módulo 'crypto' de Node.js
const crypto = require('crypto');

// Creamos un hash MD5 de la cadena de texto 'ejemplo'
const hash = crypto.createHash('md5').update('ejemplo').digest('hex');

// Mostramos el hash por consola
console.log(hash);