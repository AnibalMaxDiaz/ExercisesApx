// Array con 30 números
const numeros = [12, 7, 19, 24, 36, 45, 22, 17, 10, 8, 33, 50, 29, 40, 60, 72, 91, 81, 6, 2, 3, 9, 15, 21, 28, 14, 88, 53, 64, 97,];

let numPares = 0;
for (const element of numeros) {
  if (element % 2 === 0) {
    numPares++;
  } 
}
console.log(`Cantidad de numeros pares: ${numPares}`);





















// // Contador de números pares
// let cantidadPares = 0;

// // Recorrer el array
// for (const num of numeros) {
//  // Tu lógica
// }

// // Mostrar el resultado
// console.log(`Cantidad de números pares: ${cantidadPares}`);
