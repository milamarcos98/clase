// import con common.js
// require

// module.exports

// const suma = require('./index')

// console.log(suma(2,3))



// // exports

// // const operaciones = require("./index")
// const {suma, resta} = require("./index")

// console.log(suma(2,3))
// console.log(resta(5,2))



// ES MODULES

// import {suma as add} from "./index.js"
// console.log(add(2,3))

// import add from "./index.js"

// console.log(add(2,3))

import * as operaciones from "./index.js"

console.log(operaciones.suma(2,3))
console.log(operaciones.resta(5,2))