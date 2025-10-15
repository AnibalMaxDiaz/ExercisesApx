//index.js
const reproductor = require('./reproductor.js')

const nombreDeCancion = "cancion2";

reproductor.play(nombreDeCancion);
reproductor.pausa(nombreDeCancion);
reproductor.adelantar(nombreDeCancion);
reproductor.retroceder(nombreDeCancion);
reproductor.datosCancion(nombreDeCancion);
