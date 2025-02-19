// Array con productos en el carrito
const carrito = [
  { descripcion: "Teclado Mecánico", precioUnitario: 100, cantidad: 2 },
  { descripcion: "Mouse Inalámbrico", precioUnitario: 50, cantidad: 1 }
];


// calcula el precio de cada producto basado 
// en el precioUnitario y la cantidad
const precioProducto1 = carrito[0].precioUnitario * carrito[0].cantidad;// tu código;
// lo mismo con el otro producto
const precioProducto2 = carrito[1].precioUnitario * carrito[1].cantidad;// tu código;

const total = precioProducto1 + precioProducto2; // tu código;
  
console.log(`El total del carrito es $${total}`);
  