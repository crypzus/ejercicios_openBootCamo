//metodos para trabjar con strings

// expresiones regulares  www.regexr.com //expresiones regulares 

let textoLargo = 'es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano. Una tecnología que todavía nos resulta lejana y misteriosa, pero que desde hace unos años está presente en nuestro día a día a todas horas.'


//++++++++++metodo para cambiar un texto todo a minuscula o todo a a mayuscula para por obtenr una mejor comparacion ++++++++++++++++++++

let input = 'ERnesToR'

let db  = 'ernestor'
console.log(input.toLowerCase())
console.log(input.toLocaleLowerCase() === db.toLocaleLowerCase())
console.log(textoLargo.toUpperCase())

//usa expresiones regulares para buscar instancia en el texto incluye palabras que forma otras palabras

console.log(textoLargo.match(/es/g))

//+++++++++++++++++++++++++++++metodo para concatenar carecteres++++++++++++++++++++++++++++++++++++++++++++++++++++++
let str1 = 'aprediendo leguanje de javaScript. '
let str2 = 'vamos sueperte que si puede '
// metodo 1
console.log(str1.concat(str2))

//metodo 2
console.log(str1 + '' + str2)
//metodo 3
console.log(` hola ${str1} que divertido ${str2}` )



//+++++++++++++++++++++++++++++++++++++metodo para saber si el texoto contiene una palabra +++++++++++++++++++++++++++++++++++
console.log(textoLargo.includes('que'))

//saber si un texto termina con una palara
console.log(textoLargo.endsWith('.'))
//saber si un texto comienza con una palara
console.log(textoLargo.startsWith('es'))

//+++++++++++++++++++++++++obtener la logitud de una cade de caracteres +++++++++++++++++++++++++++++++++++++++++++++

console.log(textoLargo.length)

//++++++++++++++++++metodo obtener parte de la cadena de caracteres (slice(), substring() y substr( ya mo se usa ))+++++++++++++++++
//devule un pedazo de codigo indicado el indice de comienzo y y fin
console.log(textoLargo.slice(10,50))
console.log(textoLargo.substring(10,50))


//remplazar parte del contenido de string 
//sin expresiones regulares solo remplaza la priemera isntacia 
console.log(textoLargo.replace('el', 'cambio'))

//con expresiones regulares

console.log(textoLargo.replace(/el/g, 'cambio'))
console.log(textoLargo.replace(/ /g, ''))

//++++++++++++++++++++++++++++++metodo para elimar espacio de un string al inicio y al final +++++++++++++++++++++++++++++++++

let saludo = '       hola muchacos como estan      '
console.log(saludo.length)

//++++++++++++++++++++++++++++++++++++++++++++++metodo trim++++++++++++++++++++++++++++++++++++

console.log(saludo.trim().length)
//para eliminar solo los espacio del principio
console.log(saludo.trimStart().length)
////para eliminar solo los espacio al final
console.log(saludo.trimEnd().length)

//+++++++++++++metodo para obtener el el indice de una palabra dentro de un string 
let str3 = 'me encanta javaSript. javaScript es excelente '
console.log(str3.indexOf('encanta'))
console.log(str3.charAt(8))
console.log(str3[8])
//si quiero ingresar a  indice de la ultima palabra uso colocada
console.log(str3.lastIndexOf('javaScript'))
console.log(str3[26])
