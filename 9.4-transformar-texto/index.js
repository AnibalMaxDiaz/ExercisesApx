function transformarFrase(frase) {
  // 
  const arrayDePalabras = [];  // tu código;
  const fraseMayuscula = arrayDePalabras.map((palabra) => {
    let inicial = palabra.charAt(0);
    // console.log(inicial);
    let resto = palabra.slice(1);
    let newPalabra = inicial + resto;
    arrayDePalabras.push(newPalabra);
  });
  const oracion = arrayDePalabras.join(" ");  // unir las palabras 
  return oracion;
}

function main() {
  const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
  const oracionMayuscula = transformarFrase(frase);
  console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
}

main();