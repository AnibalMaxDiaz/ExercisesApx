const numeroDeMes = process.argv[2];
/* 
 El siguiente array contiene la data de cada mes
*/

const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Día de el burro",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la vaca",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día de los pollos",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Día de el perrito feliz",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Día de los genios",
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Día del trabajo",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día del Mompirri",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Día de los niños",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 31,
    eventoDelMes: "Día de Gindo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad y Año Nuevo",
  },

  // [completar el array de objetos]
]


// Recordá que el array comienza en 0
// el mes 1 (enero) corresponde a la posición 0 del array
// el mes 2 (febrero) corresponde a la posición 1 del array
const posicionEnElArray = numeroDeMes-1 // tu código;

const infoDelMes = informacionMensual[posicionEnElArray];


console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
// -> Descomentá las siguientes lineas y finaliza tu programa
console.log("Cantidad de días:", infoDelMes.cantidadDeDias /* tu código */);
console.log("Evento del mes:", infoDelMes.eventoDelMes /* tu código */);
