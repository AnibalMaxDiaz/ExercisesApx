// Exercise 1: "fs" (file system) module

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

//This is another way to do this, codificating the characthers with "utf8" replacing lines 5 and 6 of the code obove.
// fs.readFile('ejemplo.txt', 'utf8', (err, data) => {
//   console.log(data);
// });

// Exercise 2: "Path" module


// Importamos el módulo 'path' que nos permite trabajar con rutas de archivos
const path = require('path');

// Unimos las rutas 'carpeta1' y 'carpeta2' para obtener la ruta completa
const rutaCompleta = path.join('carpeta1', 'carpeta2');

// Mostramos la ruta completa por consola
console.log(rutaCompleta);

// Este fragmento de código importa el módulo 'path' 
// y utiliza su método 'join' para combinar dos carpetas en una ruta completa. 
// Finalmente, imprime esa ruta en la consola.

// Exercise 3: "os" module Este módulo proporciona una API para interactuar con el sistema operativo. En este ejemplo, utilizaremos la función totalmem() para obtener la cantidad total de memoria RAM del sistema.

const os = require('os');

// Obtenemos la cantidad total de memoria RAM del sistema
const totalMemoria = os.totalmem();

// Mostramos la cantidad total de memoria RAM por consola
console.log(`La cantidad total de memoria RAM es ${totalMemoria} bytes`);

// Exercise 4: "events" module: Este módulo proporciona una API para crear y manejar eventos. En este ejemplo, crearemos un objeto EventEmitter y utilizaremos el evento on() para escuchar un evento personalizado.
// Importamos la clase EventEmitter del módulo 'events'
const EventEmitter = require('events');

// Creamos un objeto EventEmitter
const emisorEventos = new EventEmitter();

// Escuchamos el evento personalizado 'miEvento'
emisorEventos.on('miEvento', () => {
  // Esta función se ejecutará cuando se active el evento 'miEvento'
  console.log('El evento "miEvento" ha sido activado');
});

// Emitimos el evento personalizado 'miEvento'
emisorEventos.emit('miEvento');

//Exercise 5:"crypto" module: Este módulo proporciona una API para funciones criptográficas. En este ejemplo, utilizaremos la función createHash() para generar un hash MD5 de una cadena de texto.
const crypto = require('crypto');

// Creamos un hash MD5 de la cadena de texto 'ejemplo'
const hash = crypto.createHash('md5').update('ejemplo').digest('hex');

// Mostramos el hash por consola
console.log(hash);

// Exercise 6: "http": Este módulo permite crear servidores web y manejar peticiones HTTP. En este ejemplo, creamos un servidor simple que responde con "Hola, mundo!" cuando se accede a él.
// importamos el módulo http que nos permite crear un servidor
const http = require("http");

// creamos un servidor utilizando el método createServer
const server = http.createServer((req, res) => {
  // enviamos una respuesta con el código de estado 200 y el tipo de contenido como texto plano
  res.writeHead(200, { "Content-Type": "text/plain" });
  // finalizamos la respuesta enviando el mensaje "Hola, mundo!"
  res.end("Hola, mundo!\n");
});

// hacemos que el servidor escuche en el puerto 3000
server.listen(3000, () => {
  // mostramos un mensaje en la consola indicando que el servidor está corriendo
  console.log("Servidor corriendo en http://localhost:3000");
  // sugerimos al usuario que ingrese a la dirección del servidor en su navegador
  console.log("Ingresá a http://localhost:3000 en tu navegador (Chrome)");
});

// Este fragmento de código crea un servidor HTTP básico 
// que responde con un mensaje de texto plano "Hola, mundo!" 
// cuando se accede a él a través del navegador. 
// El servidor escucha en el puerto 3000 y muestra mensajes 
// en la consola para indicar que está funcionando correctamente.