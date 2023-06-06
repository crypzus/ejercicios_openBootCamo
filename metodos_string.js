//ejercicio de string 

let nombre = "Ernestor Antonio";
let lastName = "Mejias Maiz";

let estudiante = `${nombre} ${lastName}`
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numeroLetras = estudiante.length;
let primeraLetra = nombre[0];

let ultimaLetra = lastName[lastName.length-1];

let eliminarEspacio = estudiante.replace(/ /g, "");

let verificacion = estudiante.includes(nombre)


console.log(verificacion);
