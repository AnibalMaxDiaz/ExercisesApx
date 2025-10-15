// Simula un reproductor de música con las siguientes funcionalidades: play, pausa, adelantar, retroceder y datosCancion.
// Cada canción tiene un nombre y una duración (en minutos).
// Crea un arreglo de canciones y permite al usuario interactuar con el reproductor a través de funciones.  
const canciones = [
  {
    nombre: "cancion1",
    duracion: 3,
  },
  {
    nombre: "cancion2",
    duracion: 2.5,
  },
  {
    nombre: "cancion3",
    duracion: 4,
  },
];
// This is the simple code before enhancement without song search
// exports.play = function (cancion) {
//   // busca la canción ...
//   console.log(`Play song: ${cancion}`);  
//};

exports.play = function (cancion) {
  // busca y reproduce la canción
  const encontrada = canciones.find(c => c.nombre === cancion);
  if (encontrada) {
    console.log(`Play song: ${encontrada.nombre} (${encontrada.duracion} min)`);
  } else {
    console.log(`Song not found: ${cancion}`);
  }
};
exports.pausa = (cancion)=> {
  // pausa la canción ...
  console.log(`Pause song: ${cancion}`);

};
exports.adelantar = function (cancion) {
  //adelanta la canción ...
  console.log(`Fast-fordward song: ${cancion}`);

};
exports.retroceder = function (cancion) {
  //retrocede la canción ...
  console.log(`Rewind song: ${cancion}`);

};
exports.datosCancion = function (cancion) {
  //retorna los datos de la canción ...
  console.log(`Song data: ${cancion}`);
  for (let i = 0; i < canciones.length; i++) {
    if (canciones[i].nombre === cancion) {
      console.log(canciones[i]);
    }
  }
};

