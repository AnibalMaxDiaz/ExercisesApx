const computadoras = [
  { nombre: "Asus", sistema_operativo: "Windows" },
  { nombre: "Macbook", sistema_operativo: "macOS" },
  { nombre: "Dell", sistema_operativo: "Windows" },
  { nombre: "Lenovo", sistema_operativo: "Linux" },
  { nombre: "HP", sistema_operativo: "Windows" }
];


for (const compu of computadoras) {
  if (compu.sistema_operativo === "Windows") {
    console.log(compu.nombre);
  }
  // Si el sistema operativo de la computadora es Windows,  
  // imprimimos su nombre 
  
  // [tu código]
}