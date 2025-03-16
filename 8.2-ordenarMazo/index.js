// first attemp

// const mazoCompleto = [
//   'A de ♥️',  '2 de ♥️',  '3 de ♥️',  '4 de ♥️',
//   '5 de ♥️',  '6 de ♥️',  '7 de ♥️',  '8 de ♥️',
//   '9 de ♥️',  '10 de ♥️', 'J de ♥️',  'Q de ♥️',
//   'K de ♥️',  'A de ♦️',  '2 de ♦️',  '3 de ♦️',
//   '4 de ♦️',  '5 de ♦️',  '6 de ♦️',  '7 de ♦️',
//   '8 de ♦️',  '9 de ♦️',  '10 de ♦️', 'J de ♦️',
//   'Q de ♦️',  'K de ♦️',  'A de ♣️',  '2 de ♣️',
//   '3 de ♣️',  '4 de ♣️',  '5 de ♣️',  '6 de ♣️',
//   '7 de ♣️',  '8 de ♣️',  '9 de ♣️',  '10 de ♣️',
//   'J de ♣️',  'Q de ♣️',  'K de ♣️',  'A de ♠️',
//   '2 de ♠️',  '3 de ♠️',  '4 de ♠️',  '5 de ♠️',
//   '6 de ♠️',  '7 de ♠️',  '8 de ♠️',  '9 de ♠️',
//   '10 de ♠️', 'J de ♠️',  'Q de ♠️',  'K de ♠️'
// ]

// // esto nos indica en que orden están las cartas en el mazo completo
// const palos = ["corazones", "diamantes", "treboles", "picas"];

// const mazoPorPalo = { };

// for (let i = 0; i < palos.length; i++) {
//   const nombreDelPalo = palos[i];
//   mazoPorPalo[nombreDelPalo] = [];

//   for (let j = 0; j < 13; j++) {
//     const carta = mazoCompleto[i * 13 + j]; 
//     mazoPorPalo[nombreDelPalo].push(carta); // Agrega la carta al array correspondiente
//   }
// }
// console.log(mazoPorPalo);

// Sort cards by deck

const mazoCompleto = [
  'A de ♥️',  '2 de ♥️',  '3 de ♥️',  '4 de ♥️',
  '5 de ♥️',  '6 de ♥️',  '7 de ♥️',  '8 de ♥️',
  '9 de ♥️',  '10 de ♥️', 'J de ♥️',  'Q de ♥️',
  'K de ♥️',  'A de ♦️',  '2 de ♦️',  '3 de ♦️',
  '4 de ♦️',  '5 de ♦️',  '6 de ♦️',  '7 de ♦️',
  '8 de ♦️',  '9 de ♦️',  '10 de ♦️', 'J de ♦️',
  'Q de ♦️',  'K de ♦️',  'A de ♣️',  '2 de ♣️',
  '3 de ♣️',  '4 de ♣️',  '5 de ♣️',  '6 de ♣️',
  '7 de ♣️',  '8 de ♣️',  '9 de ♣️',  '10 de ♣️',
  'J de ♣️',  'Q de ♣️',  'K de ♣️',  'A de ♠️',
  '2 de ♠️',  '3 de ♠️',  '4 de ♠️',  '5 de ♠️',
  '6 de ♠️',  '7 de ♠️',  '8 de ♠️',  '9 de ♠️',
  '10 de ♠️', 'J de ♠️',  'Q de ♠️',  'K de ♠️'
]

// esto nos indica en que orden están las cartas en el mazo completo
const palos = ["corazones", "diamantes", "treboles", "picas"];
const mazoPorPalo = { };

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];
  mazoPorPalo[palo] = [];
  // console.log(palo);
  for (let j = 0; j < 13; j++) {
    const carta = mazoCompleto[i * 13 + j];
    mazoPorPalo[palo].push(carta);
  }
  
}
console.log(mazoPorPalo);
