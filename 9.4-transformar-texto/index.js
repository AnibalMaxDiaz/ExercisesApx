// function transformarFrase(frase) {
//   // 
//   const arrayDePalabras = [];  
//   const fraseMayuscula = frase.map((palabra) => {
//     let inicial = palabra.charAt(0);
//     let inicialMayuscula = inicial.toUpperCase();
//     let resto = palabra.slice(1);
//     let newPalabra = inicialMayuscula + resto;
//     arrayDePalabras.push(newPalabra);
//   });
//   const oracion = arrayDePalabras.join(" ");  // unir las palabras 
//   return oracion;
// }

// function main() {
//   const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
//   const oracionMayuscula = transformarFrase(frase);
//   console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
// }
// main();


// This is the rigth way to do this
function transformarFrase(frase) {
  const fraseMayuscula = frase.map((palabra) => {
    let inicial = palabra.charAt(0); // Obtener la primera letra
    let inicialMayuscula = inicial.toUpperCase(); // Convertir a mayúscula
    let resto = palabra.slice(1).toLowerCase(); // Obtener el resto en minúscula
    return inicialMayuscula + resto; // Devolver la nueva palabra
  });
  
  const oracion = fraseMayuscula.join(" "); // Unir las palabras
  return oracion;
}

function main() {
  const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
  const oracionMayuscula = transformarFrase(frase);
  console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
}

main();
