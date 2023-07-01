
// - Crea un fichero index.js


// - Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"

const boton = document.getElementById("alert-btn");

boton.addEventListener("click", () =>{
    alert("click en el botón")
});

// - En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"
$(()=>{
    $("#alert-btn").click(()=>{
        console.log("estoy usando jQuerry");
    })

})
