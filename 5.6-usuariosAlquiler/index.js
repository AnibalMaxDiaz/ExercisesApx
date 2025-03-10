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

let cont = 0;
let contAlquiler = 0;
// const enAlquiler = [];
const nUsers = usuarios.length;
while (cont < nUsers) {
  let cont2 = 0;
  console.log(`Evaluando al usuario ${usuarios[cont].id}`)
  while (cont2 < usuarios[cont].publicaciones.length) {
    if (usuarios[cont].publicaciones[cont2].type === "alquiler") {
      // the commented lines are to create an array with the new data of properties for rent!
      // enAlquiler[contAlquiler] = usuarios[cont].publicaciones[cont2];
      // console.log(enAlquiler[contAlquiler].title);
      // contAlquiler++;
      console.log(usuarios[cont].publicaciones[cont2].title);
    }
    cont2++;

  }
  cont++;
  
}
