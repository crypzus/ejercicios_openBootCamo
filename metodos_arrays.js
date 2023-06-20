// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

let comprasMercado = ["pollo", "queso", "mantequilla", "jamon", "colifror"];
console.log(comprasMercado);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

comprasMercado.push("aceite de girasol")

console.log(comprasMercado);
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

comprasMercado.pop();
console.log(comprasMercado);
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

let favoriteMovies = [
    {titulo: "Iroman", director: "Jon Favreau" , fecha: 2008},
    {titulo: "Jhon Wick", director: "Chad Stahelski" , fecha: 2014},
    {titulo: "Shreck", director: " Andrew Adamson" , fecha: 2001}
];

console.log(favoriteMovies);


// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

let selectMovies = favoriteMovies.filter(movie => movie.fecha > 2010)
console.log(selectMovies);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const listDirector= favoriteMovies.map((pelicula) => pelicula.director )
console.log(listDirector);


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const tituloMovies = favoriteMovies.map((pelicula) => pelicula.titulo);
console.log(tituloMovies);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const moviesDirectorTitulo = listDirector.concat(tituloMovies)
console.log(moviesDirectorTitulo);
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const newList = [...listDirector, ...tituloMovies]
console.log(newList);