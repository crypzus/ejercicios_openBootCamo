

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const myPerfil = {
    nombre: "ernestor",
    apellido: "mejias",
    edad: 32,
    altura:1.69,
    eresDesarrollador: true
};
console.log(myPerfil);

// - Una variable que obtenga tu edad a partir del objeto anterior
 const myEdad = myPerfil.edad;
 console.log(myEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const grupo = [ myPerfil, {
    nombre: "Josue",
    apellido: "Chopite",
    edad: 31,
    altura:1.73,
    eresDesarrollador: true
},
{
    nombre: "Dino",
    apellido: "Leita",
    edad: 33,
    altura:1.75,
    eresDesarrollador: false
}];


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listPorEdades = grupo.sort((a,b) => b.edad - a.edad )

console.log(listPorEdades);