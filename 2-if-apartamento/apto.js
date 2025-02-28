// Ejemplo objeto 1

// const propiedad = {
//   id: 10543,
//   titulo: "Moderno departamento en el centro",
//   descripcion: "Luminoso departamento de 2 habitaciones con balcón y excelente vista a la ciudad.",
//   tipo: "departamento", // Puede ser "casa", "departamento", "terreno", etc.
//   precio: 800, // Precio mensual en la moneda especificada
//   ubicacion: {
//     direccion: "Av. Principal 123",
//     ciudad: "Buenos Aires",
//     provincia: "Buenos Aires",
//     pais: "Argentina",
//     codigoPostal: "C1000"
//   },
//   superficie: 80, // m²
//   habitaciones: 2,
//   banos: 1,
//   amenities: ["Gimnasio", "Piscina", "SUM"],
//   servicios: ["Luz", "Gas", "Agua", "Internet"],
//   propietario: {
//     nombre: "Mariana López",
//     telefono: "+54 9 11 5555-1234",
//     email: "mariana@example.com"
//   },
//   diasPublicado: 15, // Número de días que lleva publicado
//   visitas: 254,
//   destacado: true // Indica si la propiedad es destacada en el sitio
// };

//Ejemplo Objeto 2

// ❌ No cumple las condiciones (Es una casa, no un departamento)
// const propiedad = {
//   id: 20001,
//   titulo: "Casa con jardín en las afueras",
//   descripcion: "Hermosa casa con amplio jardín y pileta.",
//   tipo: "casa",
//   precio: 950,
//   ubicacion: {
//     direccion: "Calle Los Álamos 456",
//     ciudad: "Córdoba",
//     provincia: "Córdoba",
//     pais: "Argentina",
//     codigoPostal: "X5000",
//   },
//   superficie: 120,
//   habitaciones: 3,
//   banos: 2,
//   amenities: ["Parrilla", "Pileta"],
//   servicios: ["Luz", "Gas", "Agua"],
//   propietario: {
//     nombre: "Carlos Pérez",
//     telefono: "+54 9 351 789-4567",
//     email: "carlos@example.com",
//   },
//   diasPublicado: 20,
//   visitas: 100,
//   destacado: false,
// };

// Ejemplo Objeto 3

// ✅ Cumple solo las condiciones básicas
// const propiedad = {
//   id: 30002,
//   titulo: "Departamento económico en el centro",
//   descripcion: "Cómodo departamento de 2 habitaciones, sin amoblar.",
//   tipo: "departamento",
//   precio: 950,
//   ubicacion: {
//     direccion: "Av. Corrientes 987",
//     ciudad: "Buenos Aires",
//     provincia: "Buenos Aires",
//     pais: "Argentina",
//     codigoPostal: "C1010",
//   },
//   superficie: 75,
//   habitaciones: 2,
//   banos: 1,
//   amenities: ["SUM"],
//   servicios: ["Luz", "Gas", "Agua", "Internet"],
//   propietario: {
//     nombre: "Sofía Méndez",
//     telefono: "+54 9 11 2222-3333",
//     email: "sofia@example.com",
//   },
//   diasPublicado: 10,
//   visitas: 80,
//   destacado: false,
// };

// Ejemplo Objeto 4

const propiedad = {
  id: 40003,
  titulo: "Departamento premium con vista al río",
  descripcion: "Departamento amplio y luminoso con balcón y vista panorámica.",
  tipo: "departamento",
  precio: 950,
  ubicacion: {
    direccion: "Av. Libertador 1500",
    ciudad: "Buenos Aires",
    provincia: "Buenos Aires",
    pais: "Argentina",
    codigoPostal: "C1425",
  },
  superficie: 90, // Más de 80 m²
  habitaciones: 3, // Mínimo 2 habitaciones
  banos: 2,
  amenities: ["Gimnasio", "Piscina", "SUM"],
  servicios: ["Luz", "Gas", "Agua", "Internet"],
  propietario: {
    nombre: "Javier Rodríguez",
    telefono: "+54 9 11 3333-4444",
    email: "javier@example.com",
  },
  diasPublicado: 5, // Menos de 7 días
  visitas: 150,
  destacado: true,
};

// lo más prolijo es usar variables auxiliares para evaluar cada condicion
const esDepa = propiedad.tipo === "departamento";
// lo mismo con el resto de las condiciones
const menosDeMil = propiedad.precio < 1000;
const masDe2Hab = propiedad.habitaciones >= 2;
const cumple = `La propiedad ${propiedad.id} cumple con todas las condiciones`;
const datosDeContacto = `Contacto: ${propiedad.propietario.nombre} - Tel. ${propiedad.propietario.telefono} - Email ${propiedad.propietario.email}`;
const masDe80m = propiedad.superficie > 80;
const menosDe7Dias = propiedad.diasPublicado < 7;
// luego usamos un if para chequear todas las condiciones
if(esDepa && menosDeMil && masDe2Hab /*acá hay que agregar las otras condiciones*/){
  console.log("Esta propiedade cumple");
  console.log(datosDeContacto);
  // completar la lógica 
  // acá hace falta otro if para chequear las condiciones extra
  if(masDe80m && menosDe7Dias){
    console.log("Hay que contactar esta a esta propiedad lo antes posible!")
  }
}else{
  console.log(`La propiedad ${propiedad.id} no cumple con todas las condiciones`);
  // completar la lógica 
  // acá hacen falta varios ifs para mostrar las condiciones que no se cumplieron
  if (esDepa) {
    if (menosDeMil) {
      if (masDe2Hab) {
        
      } else {
        console.log("No cumple con tener minimo 2 habitaciones");
      }
    } else {
      console.log("No cumple con valer menos de 1000");
    }
  }else{
    console.log("No cumple con ser departamento");
  }
}
