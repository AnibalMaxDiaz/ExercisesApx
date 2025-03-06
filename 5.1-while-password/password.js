let chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

let password = "";
let longitudDeseada = 8;  // Longitud de la contraseña deseada
let contador = 0;

while (contador < longitudDeseada) {
  // Generamos un número aleatoria en base a la cantidad
  // de items del array "chars"
  // Esto de Math.floor() y Math.random() lo vamos a 
  // ver más adelante cuando veamos funciones.
  let indexAleatorio = Math.floor(Math.random() * chars.length);
  // Usamos el índice aleatorio para acceder al carácter
  password += chars[indexAleatorio];  
  
  // Incrementamos el contador hasta alcanzar la longitud deseada
  contador++;  
}

console.log("Contraseña generada:", password);