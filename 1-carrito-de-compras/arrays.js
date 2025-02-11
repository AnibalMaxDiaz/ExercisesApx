const carrito = [
  {
    articulo: 'Maceta',
    price: 500,
    cantidad: 1
  },
  {
    articulo: 'Tierra',
    price: 100,
    cantidad: 3
  }
]
//console.log(carrito[0].price + carrito[1].price);
let total = 0;
//Iteramos sobre los precios de cada objeto del array
function cuenta(carrito) {
  
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].price * carrito[i].cantidad;
  }
  return total;
}
cuenta(carrito);

console.log("Hasta acá hay " + carrito.length + " productos en el carrito");
console.log(carrito);
console.log("Total a pagar: " + total);
console.log("**************************************************************************************");
// suma un nuevo producto al carrito (recuerda utilizar length como vimos previamente)
// [Tú codigo aqui]
carrito[carrito.length] = {
  articulo: 'pala',
  price: 200,
  cantidad: 1
}
// vuelve a imprimir el nuevo total de producto en el carrito
console.log("Ahora hay " + carrito.length + " productos en el carrito");
console.log(carrito);
cuenta(carrito);
console.log("Total a pagar: " + total);
// [Tú codigo aqui]
