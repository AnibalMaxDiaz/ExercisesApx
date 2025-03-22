// reproductor.js
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

exports.play = function (cancion) {
  // busca la canción ...
  console.log(`Play song: ${cancion}`);
};
exports.pausa = function (cancion) {
  //...
  console.log(`Pause song: ${cancion}`);

};
exports.adelantar = function (cancion) {
  //...
  console.log(`Fast-fordward song: ${cancion}`);

};
exports.retroceder = function (cancion) {
  //...
  console.log(`Rewind song: ${cancion}`);

};
