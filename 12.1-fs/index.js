// Importamos el módulo 'fs' que nos permite trabajar con el sistema de archivos
const fs = require('fs');

// Llamamos a la función readFile para leer un archivo específico
fs.readFile('./texto.txt', (err, data) => {
  // Verificamos si hay un error al intentar leer el archivo
  if (err) throw err;
  // Si no hay errores, convertimos los datos a una cadena y los mostramos en la consola
  console.log(data.toString());
});

// Este fragmento de código se encarga de leer un archivo de texto 
// ubicado en una ruta específica. 
// Si ocurre un error durante la lectura, se lanza una excepción. 
// Si la lectura es exitosa, el contenido del archivo se imprime en la consola.