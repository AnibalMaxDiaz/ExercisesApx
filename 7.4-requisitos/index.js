const requisitos = ["javascript", "react"];

const usuario = {
  habilidades: ["javascript", "sql", "typescript", "react"],
};

let cumpleTodos = true;
for (const r in requisitos) {
  const requisito = requisitos[r];
  let encontrado = false;
  for (const habilidad of usuario.habilidades) {
    if (requisito === habilidad) {
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    cumpleTodos = false;
    break; // Salimos del bucle de requisitos, ya que ya sabemos que no cumple
  }
}
if (cumpleTodos) {
  console.log("El usuario cumple con todos los requisitos");
} else {
  console.log("El usuario no cumple con todos los requisitos");
}
