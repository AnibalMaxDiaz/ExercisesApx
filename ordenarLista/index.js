// Esta es una mega función que tiene varias funciones. Una creará una lista de 50 números aleatorios, la otra tomará un índice de esa lista y mostrará el número de ese indice de forma aleatoria y la última ordenará la lista que obtuvimos al principio
const numeros = [];

function crearLista(array) {
  for (let i = 0; i < 50; i++) {
    array.push(Math.floor(Math.random() * 50));
  }

  return array;
}

function mostrarNumeroAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

function ordenarLista(array) {               
  for (let i = array.length; i > 0; i--) {     // recorre toda la lista ordenando de atras a adelante
    for (let j = 0; j < i; j++) {             // Ubica el mas grande al final
      if (array[j] > array[j + 1]) {            
        const aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }

  return array;
}

function main() {
  console.log('Esta es la lista creada:', crearLista(numeros));
  console.log('/---/' + numeros);
  console.log('Aquí obtenemos un número aleatorio de esa lista:', mostrarNumeroAleatorio(numeros));
  console.log('/---/' + numeros);
  console.log('Y aquí tenemos esa lista ordenada:', ordenarLista(numeros));
  console.log('/---/' + numeros);

}

main();