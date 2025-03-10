// Objetivo: Queremos saber qué productos del carrito se pueden comprar sin exceder un presupuesto determinado (montoDisponible).

// Cálculo de cada producto: Para cada producto en el carrito, debes calcular el costo total multiplicando el precio por la cantidad. Por ejemplo, si tienes "Manzanas" a $35 y compras 3, el costo total sería 35 * 3 = 105.

// Acumulación del total: A medida que evalúas cada producto, debes llevar un registro del total que has gastado hasta el momento (totalAGastar). Esto te ayudará a saber si puedes permitirte comprar el siguiente producto.

// Verificación del presupuesto: Antes de agregar un producto a la lista de comprables, debes verificar si el nuevo total (el total actual más el costo del producto que estás evaluando) no excede el montoDisponible.

// Agregar productos: Si el nuevo total no excede el presupuesto, agrega el producto al array comprables y actualiza totalAGastar con el nuevo total.

// Repetir: Repite este proceso para cada producto en el carrito.

const carrito = [
  { nombre: "Manzanas", precio: 35, cantidad: 3, categoria: "Frutas" },
  { nombre: "Pan", precio: 40, cantidad: 2, categoria: "Panadería" },
  { nombre: "Leche", precio: 50, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Huevos", precio: 60, cantidad: 12, categoria: "Proteínas" },
  { nombre: "Pasta", precio: 45, cantidad: 1, categoria: "Despensa" },
  { nombre: "Queso", precio: 80, cantidad: 1, categoria: "Lácteos" },
  { nombre: "Tomates", precio: 30, cantidad: 4, categoria: "Verduras" },
  { nombre: "Aceite de Oliva", precio: 99, cantidad: 1, categoria: "Despensa" },
  { nombre: "Jabón", precio: 70, cantidad: 2, categoria: "Higiene" },
  { nombre: "Cereal", precio: 55, cantidad: 1, categoria: "Despensa" },
];

// Cuando funcione tu lógica, cambia este valor para probar como cambia el resultado final
const montoDisponible = 500; 

// Variable para recorrer el carrito
let indiceLoop = 0;  

// Variable para acumular el total gastado
let totalAGastar = 0;  
// Array donde vamos a guardar los productos que podemos comprar
const comprables = [];  
// Índice para agregar productos al array 'comprables'
let indiceComprables = 0;  
const numeroProductos = carrito.length;
while (indiceLoop < numeroProductos) {
  // Elegimos el producto a evaluar
  const producto = carrito[indiceLoop];

  // Calculamos el total de ese producto (precio * cantidad)
  const precioTotalItem = producto.precio * producto.cantidad;
  
  // sumamos este monto a lo que venimos calculando como total a gastar
  // y obtenemos lo que sería el nuevo total en caso de poder comprar ese producto
  const nuevoTotalPreliminar = totalAGastar + precioTotalItem;

  // Escribí tu lógica acá...

  // . Verificamos si el nuevo total preliminar no excede el monto disponible para saber si lo podemos comprar
  if (nuevoTotalPreliminar <= montoDisponible) {
    comprables[indiceComprables] = producto;
    totalAGastar = nuevoTotalPreliminar;
    indiceComprables++;
  }
  // . Si lo podemos comprar, usamos 'indiceComprables' para agregar el producto al array 'comprables' en el siguiente espacio disponible
  // 5. ahora totalAGastar cambia y su nuevo valor es el de nuevoTotalPreliminar
  // 6. sumamos 1 a indiceComprables para la próxima

  
  // Avanzamos al siguiente producto del carrito
  indiceLoop++;
}

console.log("Con $" + montoDisponible + " puedes comprar:", comprables);