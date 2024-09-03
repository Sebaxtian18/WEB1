
/* Funcion regular - Declarativa*/
//Estructura basica de una funcion regular o tradicional.
//Definicion:
// Palabra reservada funcion, nombre de la funcion, parentesis de parametros y llaves de bloque de codigo: 

// function unaFuncion() {
//     console.log(25 * 25);
//     console.log(25 - 25);
//     console.log(25 + 25);
//     console.log(25 / 25);
// }

// /*Llamado - Funcion regular*/
// //Se llama al igual que un metodo en java utilizando el nombre de la funcion y los parentesis de parametros: 
// unaFuncion();

// /* Funcion regular - Expresión*/
// // La funcion de expresión es una función asignada a una variable ej:
// //Primero tiene que estar definida antes de poder llamarla.
// let funcionDeExpresion = function() {
//     for (let index = 0; index < array.length; index++) {
//         console.log(25 * 25);
//         console.log(25 - 25);
//         console.log(25 + 25);
//         console.log(25 / 25);
//         console.log("")  
//     }
// }

// funcionDeExpresion()

// let repetir = true
// while (repetir) {
//     let opcion = parseInt(prompt("Seleccione: \n1 - Sumar \n2 - Restar \n3 - Multiplicar \n4 - dividir \n5 - Todas \n6 - Salir"))
//     switch (opcion) {
//         case 1:
//             sumar()
//             break;
//         case 2:
//             restar()
//             break;
//         case 3:
//             multiplicar()
//             break;
//         case 4:
//             dividir()
//             break;
//         case 5:
//             sumar()
//             restar()
//             multiplicar()
//             dividir()
//             break;
//         case 6:
//             repetir = false
//             break;

//         default:
//             break;
//     }
// }
// function sumar(){
//     let numeroUno = parseInt(prompt("Ingrese un numero"))
//     let numeroDos = parseInt(prompt("Ingrese un numero"))
//     console.log("La suma es: " + (numeroUno + numeroDos))
// }
// function restar(){
//     let numeroUno = parseInt(prompt("Ingrese un numero"))
//     let numeroDos = parseInt(prompt("Ingrese un numero"))
//     console.log("La resta es: " + (numeroUno - numeroDos))
// }
// function multiplicar(){
//     let numeroUno = parseInt(prompt("Ingrese un numero"))
//     let numeroDos = parseInt(prompt("Ingrese un numero"))
//     console.log("La multiplicacion es: " + numeroUno * numeroDos)
// }
// function dividir(){
//     let numeroUno = parseInt(prompt("Ingrese un numero"))
//     let numeroDos = parseInt(prompt("Ingrese un numero"))
//     if(numeroDos == 0){
//         console.log("No se puede dividir por 0")
//     }else{
        
//         console.log("La división es: " + numeroUno / numeroDos)
//     }
// }


/*Funcion flecha*/
// Una funcion flecha es una variable que se puede definir con cualquier tipo de variable: var, let, constant.
//Una funcion flecha va a tener el mismo comportmiento regular que una funcion de expresión.
//ej:
let funcionFlecha = () => {
    console.log("Esto es una funcion flecha")
} 
funcionFlecha()

let funcionDeExpresion = function() {
    console.log("Esto es una funcion de expresión")
} 
funcionDeExpresion()