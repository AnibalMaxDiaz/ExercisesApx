const ram = 16; // GB
const almacenamiento = 2; // TB
const nucleosCPU = 8;
const velocidadCPU = 2.4; // (GHz)
const precio = 1000; 
const esPotente  = ram >= 8 && nucleosCPU >= 4 ? "potente" : "No es potente";
const capacidad = almacenamiento > 0.5 ? "Alta" : "Baja";
const tipoCPU = velocidadCPU > 3 ? "Rapida" : "Lenta";
const rangoPrecio = precio >= 1000 ? "Costosa" : "Asequible";
const descripcion = `Esta computadora es ${esPotente} debido a su RAM de ${ram} GB y sus ${nucleosCPU} nucleos, tiene una ${capacidad} capacidad, su tipo de CPU es ${tipoCPU} y su precio es ${rangoPrecio} ya que vale ${precio} dolares.`
console.log(descripcion);