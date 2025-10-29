// dotos.js
// completar acá las funciones getAll y getOlderThan

// const datos = {Max: { edad: 22, nombre: "Max", cosas: ["guitarra", "piano"] },
//                Ana: { edad: 20, nombre: "Ana", cosas: ["bateria", "saxofon"] },
//                Luis: { edad: 25, nombre: "Luis", cosas: ["violin", "flauta"] },
//                Marta: { edad: 21, nombre: "Marta", cosas: ["cello", "trompeta"] } };

// function getAll() {
//   // debe devolver un array con todos los objetos dentro de "datos"
//   return Object.values(datos);
// }
// function getOlderThan(age) {
//   // debe devolver un array con los objetos que tienen edad mayor a "age"
//   return Object.values(datos).filter(persona => persona.edad > age);
// }
// module.exports = { getAll, getOlderThan };

const fs = require("fs");
const path = require("path");

function getAll() {
  const file = path.join(__dirname, "datos.json");
  const datos = fs.readFileSync(file, "utf-8");
  const objeto = JSON.parse(datos);
  return Object.values(objeto);
}

function getOlderThan(number) {
  const personas = getAll();
  return personas.filter((persona) => persona.edad > number);
}

module.exports = { getAll, getOlderThan };
