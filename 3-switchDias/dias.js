
const day = 5;
let dayName = "";

switch (day) {
  case 1:
    dayName = "Lunes";
    break;
  case 2:
    dayName = "Martes";
    break;
  case 3:
    dayName = "Miércoles";
    break;
  case 4:
    dayName = "Jueves";
    break;
  case 5:
    dayName = "Viernes";
    break;
  case 6:
    dayName = "Sábado";
    break;
  case 7:
    dayName = "Domingo";
    break;
  default:
    dayName = "Día inválido";
}

console.log(dayName); 

// El uso de SWITCH no es aconsajable, para la mayoría de los casos se puede usar un objeto y sus indices para resolver problemas similares. En el caso del ejercicio anterior esto sería:

// const day = 3;
// const dayNames = {
//   1: "Lunes",
//   2: "Martes",
//   3: "Miércoles",
//   4: "Jueves",
//   5: "Viernes",
//   6: "Sábado",
//   7: "Domingo"
// };

// let dayName = dayNames[day] || "Día inválido";

// console.log(dayName);