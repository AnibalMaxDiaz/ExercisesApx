function busquedaBinaria(arr, val) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
      const pm = Math.floor((inicio + fin) / 2);

      if (arr[pm] === val) {
          return pm; // Elemento encontrado, devuelve su índice
      } else if (arr[pm] < val) {
          inicio = pm + 1; // Busca en la mitad superior
      } else {
          fin = pm - 1; // Busca en la mitad inferior
      }
  }

  return -1; // Elemento no encontrado
}

// Ejemplo de uso
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valorBuscado = 9;
const indice = busquedaBinaria(arr, valorBuscado);

if (indice !== -1) {
  console.log(`El valor ${valorBuscado} se encuentra en el índice ${indice}`);
} else {
  console.log(`El valor ${valorBuscado} no se encuentra en el arreglo`);
}
