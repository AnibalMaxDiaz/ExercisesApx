const laptop = {
  id: "LAP123456",
  marca: "TechBrand",
  modelo: "X200",
  especificaciones: {
    procesador: "Intel Core i7",
    ram: 16, // en GB
    almacenamiento: 512, // en GB
    pantalla: 15.6 // en pulgadas
  },
  precioBase: 1000,
  incluyeSeguro: true,
  esReacondicionado: false,
  fechaFabricacion: { dia: 20, mes: 11, anio: 2023 },
  estado: "nuevo" // puede ser "nuevo" o "usado"
};

let precioFinal = laptop.precioBase;

// tu código
if (laptop.incluyeSeguro === true) {
  precioFinal += 100;
}
if (laptop.esReacondicionado === true) {
  precioFinal -= 150;
}
if (laptop.especificaciones.ram >= 16) {
  precioFinal += 50;
}

console.log(precioFinal);