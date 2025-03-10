const formularioDeEnvio = {
  direccion: "Av. Siempreviva 742",
  nombre: "Juan Pérez",
  ciudad: "",
  codigoPostal: null,
  telefono: "123-456-789",
};

const camposVacios = [];
let indiceCamposVacios = 0;

for (const key in formularioDeEnvio) {
  if (!formularioDeEnvio[key]) {
    camposVacios[indiceCamposVacios] = key;
    indiceCamposVacios++;
  } 
}
if (camposVacios.length > 0) {
  console.log(
    "Los siguientes campos están vacíos o son inválidos:",
    camposVacios
  );
} else {
  console.log("Todos los campos están completos.");
}

