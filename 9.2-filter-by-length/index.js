
function main(){
  const arr = ["hola", "adios", "bienvenido", "chau"];
  console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]
  
}

function filterByLength (array, number){
  const newArray = [];
  for (const word of array) {
    if (word.length >= number) {
      newArray.push(word);
    }
  }
  return newArray;
}

main();