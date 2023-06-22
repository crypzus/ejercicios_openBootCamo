// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const mensajeError = val =>{
    throw new Error (val)
};

// - Registra el error en un archivo a través de un try...catchn
const logger = require("../logger");
try {
mensajeError("este es un mensaje error personalizado")

}catch(e){
logger.error("ERROR!", e.message );
}