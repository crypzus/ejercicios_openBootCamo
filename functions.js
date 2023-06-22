// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function saludar() {
  return true;
}
console.log(saludar());
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function mensajeAsicorna (){
    await new Promise ((resolve, reject) => {
        if(true){
           setTimeout(resolve, 5000);
           
            console.log("Hola soy una promesa");
        }else{
            reject()
            console.log("error");
        }
    })
}

mensajeAsicorna();
// - Una función generadora de índices pares automáticos

function* genIndice() {
  let id = 0;
  while (true) {
    yield id;
    id += 2;
     
  }
}
const genIdx = genIndice();

for (let i = 0 ; i < 10; i++){
    console.log(genIdx.next().value);
}

