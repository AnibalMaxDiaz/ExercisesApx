// Array de usuarios con sus publicaciones
const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    publicaciones: [
      { title: "Departamento en alquiler - Centro", type: "alquiler" },
      { title: "Casa en venta - Suburbios", type: "venta" },
    ],
  },
  {
    id: 2,
    nombre: "María López",
    publicaciones: [
      { title: "Local comercial en alquiler - Zona Norte", type: "alquiler" },
    ],
  },
  {
    id: 3,
    nombre: "Carlos García",
    publicaciones: [
      { title: "Terreno en venta - Campo", type: "venta" },
      { title: "Cabaña en venta - Montaña", type: "venta" },
    ],
  },
  {
    id: 4,
    nombre: "Ana Torres",
    publicaciones: [],
  },
  {
    id: 5,
    nombre: "Luis Gómez",
    publicaciones: [
      { title: "Oficina en alquiler - Centro", type: "alquiler" },
      { title: "Apartamento en venta - Playa", type: "venta" },
    ],
  },
  {
    id: 6,
    nombre: "Sofía Martínez",
    publicaciones: [],
  },
];

const usuEnAlquiler = {};
let cont = 0;
console.log("Usuarios con propiedades en alquiler:")
for (const user of usuarios) {
  for (const propiedad of user.publicaciones) {
    let tipo = propiedad.type;
    if (tipo === "alquiler") {
      usuEnAlquiler[user.id] = true;
      cont++;
    }
  }
}
console.log(usuEnAlquiler);






