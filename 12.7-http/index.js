// index.js
// Servidor HTTP básico en Node.js que responde con "Hola, mundo!"
// Instrucciones: Ejecutá este archivo con Node.js y abre http://localhost:3000 en Chrome.

//importar el módulo http
const http = require("http");

//crear el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola, mundo!\n");
});

//escuchar en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
  console.log("Ingresá a http://localhost:3000 en tu navegador para ver la respuesta.");
});
