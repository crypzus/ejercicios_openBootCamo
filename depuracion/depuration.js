// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
function fibonacci (num){
        let resultado = [];
        if(num >= 1)
            resultado = [...resultado, 1];
        if(num >= 2)
             resultado = [...resultado, 1];
            
    
        for(let i = 2; i < num  ; i++){
                  let calculo = resultado[i - 1] + resultado[i - 2];
                    resultado = [...resultado, calculo];
                
             }
            return resultado;
        }
        
       let newFiboaccci = fibonacci(6);
        console.log(newFiboaccci);


// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función