const parrafos = document.querySelectorAll(".parrafos");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelector(".papelera")

//se usa un forEach opara interractuar con cada elemento dentro del div
parrafos.forEach(parrafo => {
    //se crea un evento listener de donde comienza el arraste
    parrafo.addEventListener("dragstart", e => {
        console.log("estoy arrastrando el parrafo: " + parrafo.innerText);
        //se crea un elemento nuevo mientras se arrastra el elemnento selecionado 
        parrafo.classList.add("dragging");
        //transfiere la info de un div a otro 
        e.dataTransfer.setData("id", parrafo.id);


        //para cambiar la imagen que parece cuando estoy moviendo el elemento
        const elemenFantasma = document.querySelector(".imagen-fantasma");
        e.dataTransfer.setDragImage(elemenFantasma, 0, 0);
    })

    parrafo.addEventListener("dragend", ()=>{
        console.log("fin de arrastre");
        parrafo.classList.remove("dragging");
    })
} );

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", e=>{
        e.preventDefault();
        //para cambiar el puntero a la ora de transferir un elemento copy, link, move
        e.dataTransfer.dropEffect = "copy"
        
    });

    seccion.addEventListener("drop", e=>{
        console.log("drop");
        //optiene la informacion que es enviada desde parrafo
        const id_parrafos= e.dataTransfer.getData ("id")
        console.log(id_parrafos);
        //opbtiene la info de un id a otro
        const parrafo = document.getElementById(id_parrafos);
        seccion.appendChild(parrafo);
    })

})
//permite que los elementos se puenda soltar en la iamgen
papelera.addEventListener("dragover", e => {
    e.preventDefault();
    //Esta clase se utiliza para resaltar visualmente la papelera
    papelera.classList.add("papelera-hover")

});
papelera.addEventListener("dragleave", () =>{
    //quita el estilo de la papelera cuando el framento se arrastra fuera de ella 
    papelera.classList.remove("papelera-hover"); 
});

//se define el evento drop en la papelera para eliminar el fragmento del puzzle cuando se suelta en la papelera
papelera.addEventListener("drop", e => {
    //obtiene el elemento del fragmento  utilizando su ID.
    const eliminar = e.dataTransfer.getData("id");
    // elimina el elemento del fragmento  del documento
    const parrafo = document.getElementById(eliminar);
    parrafo.remove();
    console.log("fragmento eliminado");

});