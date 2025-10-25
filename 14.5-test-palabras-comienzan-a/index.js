// Para este desafío, les proponemos trabajar con la metodología TDD. A partir de un test, deben crear una función que cuente cuántas palabras tiene el string que reciba y además devuelve cuantas palabras comienzan con la letra A. La función debe devolver un objeto con dos miembros:

// Escribir acá la función cuentaPalabras
function cuentaPalabras(texto) {
  // Texto sin espacios al inicio y al final
  texto = texto.trim();
  // Dividir el texto en palabras usando el espacio como separador
  const palabras = texto.split(" ");
  // Contar la cantidad total de palabras
  const cantidadDePalabras = palabras.length;
  // Contar cuántas palabras comienzan con la letra "A" o "a"
  let palabrasConA = 0;
  for (let palabra of palabras) {
    if (palabra.charAt(0).toLowerCase() === "a") {
      //  incrementar el contador si la palabra comienza con "A" o "a"
      palabrasConA++;
    }
  }
  // Retornar el objeto con los dos miembros
  return {
    cantidadDePalabras: cantidadDePalabras,
    palabrasConA: palabrasConA,
  };
}

// no modificar esta funcion
function testCuentaPalabras() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
  const resultado = cuentaPalabras(texto);
  if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
    console.log("testCuentaPalabras passed");
  } else {
    throw "testCuentaPalabras falló";
  }
}

function main() {
  testCuentaPalabras();
  console.log(cuentaPalabras("Aca hay algunas palabras que empiezan con A y llamamos a la funcion cuentaPalabras para ver el objeto resultado"));
}

main();