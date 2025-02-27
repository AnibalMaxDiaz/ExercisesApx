const propiedad = {
  id: 10543,
  titulo: "Moderno departamento en el centro",
  descripcion: "Luminoso departamento de 2 habitaciones con balcón y excelente vista a la ciudad.",
  tipo: "departamento", // Puede ser "casa", "departamento", "terreno", etc.
  precio: 800, // Precio mensual en la moneda especificada
  ubicacion: {
    direccion: "Av. Principal 123",
    ciudad: "Buenos Aires",
    provincia: "Buenos Aires",
    pais: "Argentina",
    codigoPostal: "C1000"
  },
  superficie: 80, // m²
  habitaciones: 2,
  banos: 1,
  amenities: ["Gimnasio", "Piscina", "SUM"],
  servicios: ["Luz", "Gas", "Agua", "Internet"],
  propietario: {
    nombre: "Mariana López",
    telefono: "+54 9 11 5555-1234",
    email: "mariana@example.com"
  },
  diasPublicado: 15, // Número de días que lleva publicado
  visitas: 254,
  destacado: true // Indica si la propiedad es destacada en el sitio
};

// lo más prolijo es usar variables auxiliares para evaluar cada condicion
const esDepa = propiedad.tipo === "departamento";
// lo mismo con el resto de las condiciones

// luego usamos un if para chequear todas las condiciones
if(esDepa /*acá hay que agregar las otras condiciones*/){
  console.log("Esta propiedade cumple")
  // completar la lógica 
  // acá hace falta otro if para chequear las condiciones extra
}else{
  console.log("Esta propiedade no cumple");
  // completar la lógica 
  // acá hacen falta varios ifs para mostrar las condiciones que no se cumplieron
}
