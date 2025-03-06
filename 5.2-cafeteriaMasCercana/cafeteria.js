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
    distance: 3.0,
  },
];

// Elegimos la primera para tener un punto de partida
let cafeteriaMasCercana = cafes[0];
// En este caso no necesitamos empezar el i en 0 porque 
// porque ese item no vale la pena evaluarlo
let i = 1;

while (i < cafes.length) {
  // Para encontrar la más cercana tenes que comparar
  // lo que tenés guardado en la variable "cafeteriaMasCercana"
  // con la cafetería que estás recorriendo con el while: cafes[i]
  // y si la distancia es menor, pisás cafeteriaMasCercana
  // para quedarte con esa. Al finalizar el while
  // cafeteriaMasCercana va a tener la que tenga 
  // la propiedad "distance" con el número más bajo

    cafeteriaMasCercana = cafes[i - 1].distance < cafes[i].distance ? cafes[i - 1] : cafes[i];

  // if (cafes[i] < cafes[i-1]) {
  //   cafeteriaMasCercana = cafes[i];
  // }else{
  //   cafeteriaMasCercana = cafes[i-1];
  // }
  i++;
}

console.log(
  "La cafetería más cercana es:",
  cafeteriaMasCercana.name,
  "a",
  cafeteriaMasCercana.distance,
  "km."
);
