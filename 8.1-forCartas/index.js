// Ordenar el mazo de cartas
const palos = ["♥️", "♦️", "♣️", "♠️"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const mazo = [];
let indiceGeneral = 0;

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];
  for (let J = 0; J < valores.length; J++) {
    const valor = valores[J];
    mazo[indiceGeneral] = `${valor} de ${palo}`;
    indiceGeneral++;
  }

  // Acá tenés que usar otro for para recorrer
  // los valores y generar cada carta

  // [tu lógica]
}

console.log(mazo);
