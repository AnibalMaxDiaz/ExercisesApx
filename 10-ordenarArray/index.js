// function to create an array
function createArray(array){
  for (let i = 0; i < 40 ; i++) {
    const numero = Math.floor(Math.random()*100);
    array.push(numero);
  }
  return array;
}

// Function to sort the array "buuble sort"
function sortArray(array){
  let aux;
  let l = array.length;
  for (let i = 0; i < (l -1); i++) {
    for (let j = 0; j < (l-i-1); j++) {
      if (array[j] > array[j + 1]) {
        aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
      }
      
    }
  }
  return array;

  // Este codigo simplifica el de arriba y funciona perfecto!
  // array.sort((a, b) => a - b);
  // console.log(array);  or return in this case!
}


function main(){
  const array = [];
  const arrayF = createArray(array);
  console.log(arrayF);
  const orderedArray = sortArray(arrayF);
  console.log(orderedArray);
}

main();