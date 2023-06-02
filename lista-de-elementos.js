/* Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */


const myDate = {
  name: "Ernestor Mejias",
  edad: 32,
  desarrollador: true,
  fechaNacimiento: new Date(1990, 6, 18),
  myFavoriteBook: {
    titulo: "el hombre mas rico de babilonia",
    autor: "George S. Clason",
    fecha: 1926,
    url: "https://irp-cdn.multiscreensite.com",
  },
};
console.log(myDate);
