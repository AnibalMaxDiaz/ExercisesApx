const usuarios = [
  { nombre: "Juan", habilidades: ["javascript", "react"] },
  { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
  { nombre: "Lucas", habilidades: [] },
  { nombre: "Ana", habilidades: ["inglés", "javascript"] },
  { nombre: "Sofía", habilidades: ["react", "typescript"] },
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

for (const user in usuarios) { // recorrer cada usuario
  const usuario = usuarios[user];
  let cumpleTodosLosRequisitos = true; // Reiniciamos para cada usuario

  for (const requisito of aviso.requisitos) { // recorrer cada requisito
    let cumpleRequisito = false; // Reiniciamos para cada requisito

    for (const habilidad of usuario.habilidades) { // recorrer cada habilidad
      if (requisito === habilidad) { // comparar requisito y habilidad
        cumpleRequisito = true; // Si encontramos la habilidad
        break; // Salimos del bucle de habilidades
      }
    }

    if (!cumpleRequisito) { // Si no cumple algún requisito
      cumpleTodosLosRequisitos = false; // Cambiamos a false
      break; // Salimos del bucle de requisitos
    }
  }

  if (cumpleTodosLosRequisitos) { // Si cumple todos los requisitos
    candidatos[indiceCandidatos] = usuario; // Agregamos el usuario
    indiceCandidatos++;
  }
}

console.log(`Los candidatos son:`, candidatos);



