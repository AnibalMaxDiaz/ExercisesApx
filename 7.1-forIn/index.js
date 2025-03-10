// producto por id
const productos = {
  "p001": {
    nombre: "Laptop",
    marca: "Dell",
    precio: 1200
  },
  "p002": {
    nombre: "Monitor",
    marca: "Samsung",
    precio: 300
  },
  "p003": {
    nombre: "Teclado Mecánico",
    marca: "Logitech",
    precio: 100
  }
};

// Usando un bucle for...in para recorrer el objeto
for (const id in productos) {
  console.log(`ID: ${id}`);
  console.log(`Nombre: ${productos[id].nombre}`);
  console.log(`Marca: ${productos[id].marca}`);
  console.log(`Precio: $${productos[id].precio}`);
}