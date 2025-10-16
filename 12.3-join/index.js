
const path = require('path');

//Carpetas y archivo
const carpetasYArchivo = ('carpeta1', 'carpeta2', 'archivo1.txt');

// Unimos las diferentes partes de las carpetas y el archivo, utilizando el método join
const rutaConSeparadores = path.join('carpeta1', 'carpeta2', 'archivo1.txt');
// Obtenemos la ruta absoluta, utilizando el método resolve
const rutaAbsoluta = path.resolve('carpeta1', 'carpeta2', 'archivo1.txt');
// Obtenemos el nombre del archivo, utilizando el método basename, aqui utilizamos la ruta del archivo como parametro.
const nombreArchivo = path.basename(rutaAbsoluta); 
// Obtenemos la extensión del archivo, utilizando el método extname, aqui utilizamos la ruta del archivo como parametro.
const extensionArchivo = path.extname(rutaAbsoluta);

// Mostramos las rutas de acuerdo al metodo utilizado
console.log(`Ruta con los separadores adecuados: ${rutaConSeparadores}`);
console.log(`Ruta Absoluta: ${rutaAbsoluta}`);
console.log(`Nombre del archivo: ${nombreArchivo}`);
console.log(`Extensión del archivo: ${extensionArchivo}`);