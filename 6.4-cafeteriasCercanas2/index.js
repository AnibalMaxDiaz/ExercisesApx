const cafes = [
  {
    name: "Café Aurora",
    products: ["Latte", "Croissant", "Capuchino"],
    distance: 1.2,
  },
  {
    name: "El Rincón del Espresso",
    products: ["Espresso", "Bagel", "Café Mocha"],
    distance: 0.8,
  },
  {
    name: "Java Lounge",
    products: ["Americano", "Té Verde", "Sándwich"],
    distance: 2.5,
  },
  {
    name: "La Taza Feliz",
    products: ["Macchiato", "Muffin", "Frappuccino"],
    distance: 1.8,
  },
  {
    name: "Brewtopia",
    products: ["Cold Brew", "Brownie", "Flat White"],
    distance: 0.5,
  },
  {
    name: "Café Nómada",
    products: ["Café Negro", "Churro", "Matcha Latte"],
    distance: 1.0,
  },
];

// Iniciamos un array vacio
const distanciaMaxima = 1;
const cercanas = [];
let cont = 0;
for (const cafe of cafes) {
  if (cafe.distance <= distanciaMaxima){
    cercanas[cont] = cafe;
    cont++;
    // console.log(cafe);
    // console.log(cercanas);
  }
}
console.log(`Las cafeterias mas cercanas son: ${JSON.stringify(cercanas)}`);














// for (const c of cafes) {
//   // acá tenemos que usar un if para saber
//   // si la distancia c.distance es menor a ditanciaMaxima
//   // si es asi lo metemos dentro del array cercanas[]
  
//   // PISTA: Necesitamos un indice extra para ir 
//   // acumulando cosas en el array cercanas[]

//   // [Tu lógica]
// }

// console.log(
//   "La cafeterías más cercanas son:",
//   cercanas
// );
