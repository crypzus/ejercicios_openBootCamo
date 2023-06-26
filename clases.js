// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:
class Estudiante{
    // - Una variable llamada nombre
        // - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    
    constructor(nombre){
        this.nombre = nombre;
        this.asignatura = ["Javascript", "HTML", "CSS"];;
    }

    // - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos(){
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
    }
}

const Ernestor = new Estudiante("Ernestor");
console.log(Ernestor.obtenDatos());





// - Crea una nueva instancia de "Estudiante"

// // - Haz la llamada al método obtenDatos