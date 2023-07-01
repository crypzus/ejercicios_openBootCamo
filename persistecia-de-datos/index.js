
// - En el fichero index.js:

// - Crea una letiable con tu nombre

 const nombre = "ernestor"

// - Crea una letiable con tu apellido
const lastName = "mejias"

// - Crea un objeto con tu nombre y tu apellido

const nameComplet = {nombre:nombre, apellido:lastName}
console.log(nameComplet);

// - Almacena el objeto anterior en la SessionStorage

sessionStorage.setItem("name", JSON.stringify(nameComplet) );

// - Almacena el objeto anterior en la LocalStorage
localStorage.setItem("name", JSON.stringify(nameComplet) );

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
function crearCookie(nombre, valor, minutos) {
    let fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (minutos * 60 * 1000));
    
    let expiracion = "expires=" + fechaExpiracion.toUTCString();
    
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
  }
  
  // Ejemplo de uso
  crearCookie("miCookie", JSON.stringify(nameComplet) , 2); 



