// Valores iniciales

const base = 9;
let multiplicador = 3;
const texto = "JavaScript";
const booleano = true;
const modulo = 5;
let acumulador = 5;

// ------------------------------------
// Operaciones

const suma = base + multiplicador;
// Predicción: suma va a ser 12 
const resta = base + suma - acumulador;
// Predicción: 18
// resta va a ser 18 (base es 9 + suma que es 12 - 3 )

// De acá en más, escribí tu predicción debajo
// de cada operación y compartí todas tus predicciones 
// con Lisa. Intenta hacerlo mentalmente para
// practicar tu lectura de código.

let frase = texto
frase += " " + "es genial";
// frase va a ser [JavaScript es genial]

const negacion = !booleano;
// negación va a valer [false]

const dobleNegacion = !!negacion;
// dobleNegacion va a valer [false]

multiplicador *= 3;
// [9]

const division = base * 10 / multiplicador;
// [10]


const residuo = base % modulo;
// [4]
const esPar = multiplicador % 2 === 0;
// [false]

const comparacion = acumulador == "5";
// [true]

const comparacionEstricta = acumulador === "5";
// [false]

acumulador += base;
// [14]

const mayor = acumulador > base;
// [true]

const menorOigual = multiplicador <= 30;
// [true]

const operadorOR = booleano || false;
// [true]

const operadorAND = booleano && (base > 5);
// [true]

const combinado = (base * multiplicador) - modulo;
// [76]
