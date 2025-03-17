// function obtenerNumerosPares(numeros) {
//   const numerosPares = [];
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//       numerosPares.push(numeros[i]);
//     }
//   }
//   return numerosPares;
// }

// const obtenerNumerosPares = (numeros)=> {
//   const numerosPares = [];
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//       numerosPares.push(numeros[i]);
//     }
//   }
//   return numerosPares;
// }

// forma resumida de la funcion flecha y el metodo filter
const obtenerNumerosPares = numeros => numeros.filter(numero => numero % 2 === 0);


function main(){
  numbers = [9,5,8,4,2,3,4,2,6,5]
  console.log(obtenerNumerosPares(numbers)) ;
}

main();