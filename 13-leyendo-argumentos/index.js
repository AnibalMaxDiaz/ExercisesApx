/* función que reciba un array de argumentos introducidos desde la terminal con este formato:

node index.js --argument valor --otro-argumento otro-valor --tercer-argumento 80

Además, esa función tiene que devolver el array de argumentos convertido en un objeto, por lo tanto, tiene que tener este formato:

{
  "argumento":"valor",
  "otro-argumento":"otro-valor",
  (etc…)
}
*/

function parseArgsToObj() {
  const args = process.argv.slice(2);
  const argsObj = {};   
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, ''); 
    const value = args[i + 1]; 
    argsObj[key] = value; 
  } 
  return argsObj;
}
console.log(parseArgsToObj());



