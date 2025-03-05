const carpeta = {
  nombre: "Proyecto Web",
  archivos: [
      { name: "index.html", size: "2KB" },
      { name: "styles.css", size: "5KB" },
      { name: "app.js", size: "10KB" },
      { name: "logo.png", size: "15KB" },
      { name: "README.md", size: "1KB" },
      { name: "data.json", size: "3KB" }
  ]
};

// While que elimina los archivos uno por uno
while (carpeta.archivos.length > 0) {
  // esto de .pop() es algo un poco más avanzado
  // que vamos a ver cuando veamos funciones
  // pero básicamente saca la última posición
  // del array y te la devuelve

  const archivoEliminado = carpeta.archivos.pop();
  console.log(`Archivo eliminado: ${archivoEliminado.name} (${archivoEliminado.size})`);
}

console.log("Todos los archivos han sido eliminados.");