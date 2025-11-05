// La aplicación tiene que recibir argumentos a través de la terminal y mostrar un listado de películas basado en los argumentos que le hayas pasado.

// Arquitectura
// Tu aplicación debe tener estos 3 archivos:

// index.js
// Recibe argumentos, los procesa y delega las acciones a pelis.js.
// pelis.js
// Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.
// pelis.json
// Es una colección (array de objetos) que tiene los datos de las películas. Cada película (cada objeto del array) puede tener las propiedades que quieras, pero deben tener al menos estas tres propiedades: title, rating y tags.

const pelis = require('./pelis.js');
const args = process.argv.slice(2);

function parsearInput(args) {
  const comando = {};
  console.log(args)
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].substring(2);
      const value = args[i + 1];
      comando[key] = value;
      i++
    }else {
      const key = args[i];
      const value = args[i + 1];
      comando[key] = value;
      i++;
    }
  }
  return comando;
}

function main() {
  argumentos = parsearInput(args);
  console.log(argumentos.sort);
  //console.log(parsearInput(args));
  console.log(`Este es el listado de todas las peliculas: `)
  // const todasLasPelis = pelis.getAll();
  // console.table(todasLasPelis);
  console.table(pelis.getAll());
  // console.log(ordenarPeliculas(todasLasPelis, XXXXXXX))

}
main();