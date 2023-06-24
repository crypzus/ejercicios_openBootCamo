// - En el entrypoint index.js, importa el módulo controller.js

import {suma, multiplicacion} from "./controller.js"
import chalk from "chalk";

// - El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

const num = suma(1, 2);
const num2 = suma(4,5);
const num3 = multiplicacion(num , num2);




// - Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log( chalk.red(num));
console.log( chalk.yellow(num2));
console.log( chalk.bold.greenBright(num3));