const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["typescript", "react"] },
  { nombre: "Martín", habilidades: ["react", "next.js"] },
  { nombre: "Julián", habilidades: ["javascript", "typescript"] },
  { nombre: "Lucía", habilidades: ["inglés", "react"] },
  { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
];

const aviso = {
  compania: "TechFlow",
  texto:
    "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
  requisitos: ["typescript", "react"],
};


const candidatos = [];
let indiceCandidatos = 0;
for (const user in usuarios) {
  let esCandidato = false;
  const usuario = usuarios[user];
  for (const habilidad of usuario.habilidades) {
    let encontrado = false;
    for (const requisito of aviso.requisitos) {
      if (requisito === habilidad) {
        encontrado = true;
        break;
      }
    }
    if (encontrado) {
      esCandidato = true;
    }      
  }
  if (esCandidato) {
    candidatos[indiceCandidatos] = usuario;
    indiceCandidatos++;
  }
}
console.log(`Los candidatos son ${candidatos}`);



// for (const user in usuarios) {
//   const usuario = usuarios[user];
//   let cumpleTodosLosRequisitos = true; // Reiniciamos para cada usuario

//   for (const requisito of aviso.requisitos) {
//       let cumpleRequisito = false; // Reiniciamos para cada requisito

//       for (const habilidad of usuario.habilidades) {
//           if (requisito === habilidad) {
//               cumpleRequisito = true; // Si encontramos la habilidad
//               break; // Salimos del bucle de habilidades
//           }
//       }

//       if (!cumpleRequisito) {
//           cumpleTodosLosRequisitos = false; // Si no cumple algún requisito
//           break; // Salimos del bucle de requisitos
//       }
//   }

//   if (cumpleTodosLosRequisitos) {
//       candidatos[indiceCandidatos] = usuario; // Agregamos el usuario
//       indiceCandidatos++;
//   }
// }







// // Lógica para encontrar candidatos
// for (const index in usuarios) {
//   const usuario = usuarios[index];

//   // inicializamos esto en true porque es más facil
//   // buscar si existe algun requisito que no se cumpla
//   // y pasarlo a false
//   let cumpleTodosLosRequisitos = true;

//   for (const requisito of aviso.requisitos) {
//     // fijate si este requisito se encuentra en el array de habilidades
//     // del usuario, y si no, pasar a false cumpleRequisitos
//     let cumpleRequisito = false;
//     // [Tu lógica acá]
//     // tenés que ver si este requisito está dentro de las habilidades del usuario
//     // si está cambiás cumpleRequisito a true
//     // si no está, no hacés nada y esto automáticamente
//     // descarta a este candidato

//     if (!cumpleRequisito) {
//       cumpleTodosLosRequisitos = false;
//     }
//   }

//   if (cumpleTodosLosRequisitos) {
//     cumpleTodosLosRequisitos = false;
//   }
// }

// console.log(candidatos);