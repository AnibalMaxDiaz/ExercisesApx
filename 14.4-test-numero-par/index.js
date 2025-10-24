// This is the test function to verify the correctness of esPar function
function testEsPar(){
  console.assert(esPar(2) === true, 'Failure for even numbers');
  console.assert(esPar(3) === false, 'Failure for odd numbers');
  console.assert(esPar(0) === true, 'Failure to zero');
  console.assert(esPar(-2) === true, 'Failure for even negative numbers');
  console.assert(esPar(-3) === false, 'Failure for odd negative numbers');
  console.log('All tests passed correctly.');
}

// This is the main function to check if a number is even
function esPar(num) {
  return num % 2 === 0;
}

//Here we call the main function and the test function to verify its correctness
testEsPar();
console.log(esPar(4)); // Should print true
console.log(esPar(5)); // Should print false
