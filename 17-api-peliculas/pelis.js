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

// Función para buscar películas por título (texto)
function buscarPeli(pelis, texto) {
  peliculasFiltradas = pelis.filter(peli => {
    return peli.title.toLowerCase().includes(texto.toLowerCase());
  });
  return peliculasFiltradas;
}

// Función para filtrar películas por tag
function pelisPorTag(pelis, tag) {
  console.log(`Listado de peliculas con el tag ${tag}: `);
  pelisFiltradasPorTag = pelis.filter(peli => {
    return peli.tags.includes(tag);
  });
  return pelisFiltradasPorTag;
}

// Exportar las funciones para que puedan ser usadas en index.js
module.exports = {
  getAll, ordenarPeliculas, buscarPeli, pelisPorTag
};