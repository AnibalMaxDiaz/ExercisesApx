// Función original contarPalabras que cuenta palabras separadas por espacios marcando el error al contar espacios adicionales

function contarPalabras(texto) {
  const palabras = texto.split(" ");
  return palabras.length;
}
// Versión corregida de la función contarPalabras usando trim para evitar contar espacios adicionales

// function contarPalabras(texto) {
//   const palabras = texto.trim().split(" ");
//   return palabras.length;
// }

// Función de prueba
function testContarPalabras() {
  const texto = " Esta es una prueba de contar palabras ";
  
  const resultado = contarPalabras(texto);

  // Verificamos los resultados
  if (resultado === 7) {
    console.log("testContarPalabras funciona correctamente");
  } else {
    console.error("testContarPalabras falló en la prueba");
    console.error("Se esperaban 7 palabras y se obtuvo", resultado);
  }
}

testContarPalabras();
