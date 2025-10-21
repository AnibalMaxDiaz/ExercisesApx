// contar.js
// Function to count words in a phrase
function contarPalabras(phrase) {
  console.log(phrase);
  const numberOfWords = phrase.split(' ').length
  return numberOfWords
}
// If you use this code instead of the one above, the test will fail, because the expected output is different, changing slice to split

// function contarPalabras(phrase) {
//   console.log(phrase);
//   numberOfWords = phrase.slice(' ').length
//   return numberOfWords
// }

module.exports = contarPalabras;

