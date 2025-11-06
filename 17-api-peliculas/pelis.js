// pelis.js
// Este archivo tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.
const fs = require('fs');
const path = './pelis.json';
// Función para obtener todas las películas
function getAll() {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
}

// Función para ordenar películas por una propiedad específica (título, rating, etc.) 
// de forma ascendente 
// Usamos el método sort de los arrays y una función de comparación personalizada

function ordenarPeliculas(pelis, propiedad) {
  return pelis.sort((a, b) => {
    // Comparar las propiedades de los objetos a y b
    if (a[propiedad] < b[propiedad]) return -1; // a va antes que b
    if (a[propiedad] > b[propiedad]) return 1;  // b va antes que a
    return 0; // son iguales
  });
}



module.exports = {
  getAll, ordenarPeliculas
};