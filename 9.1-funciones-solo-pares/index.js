function main() {
  // Declarar un array de objetos
  const arrayObjetos = [
    { t: "a", n: 1 },
    { t: "b", n: 2 },
    { t: "c", n: 3 },
    { t: "d", n: 4 },
    { t: "e", n: 5 },
    { t: "f", n: 6 },
    { t: "g", n: 7 },
    { t: "h", n: 8 },
    { t: "i", n: 9 },
    { t: "j", n: 10 },
    { t: "k", n: 11 },
    { t: "l", n: 12 },
    { t: "m", n: 13 },
    { t: "n", n: 14 },
    { t: "o", n: 15 },
    { t: "p", n: 16 },
    { t: "q", n: 17 },
    { t: "r", n: 18 },
    { t: "s", n: 19 },
    { t: "t", n: 20 }
  ];

  // Llamar a la función que filtra los objetos pares
  const resultado = filtrarObjetosPares(arrayObjetos);

  // Mostrar el resultado por consola
  console.log(resultado);
}

function filtrarObjetosPares(array) {
  const resultado = [];

  // Recorrer el array de objetos
  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];

    // Verificar si el número dentro del objeto es par
    if ( objeto.n % 2 === 0) {
      // Agregar el objeto al array resultado
      resultado.push(objeto);
    }
  }

  return resultado;
}
main();