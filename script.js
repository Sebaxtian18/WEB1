// for(let i /*index*/ = 0; i < 5; i++/*incremento de uno en uno*/){
//     let numeroUno = Number(prompt("Ingrese un número: "));
//     let numeroDos = Number(prompt("Ingrese un número: "));
//     let operacion = parseInt(prompt("Seleccione la operación: \n1 - Sumar \n2 - Resta \n3- Multiplicacion \n4- Dividir"))

//     switch (operacion){
//         case 1:
//             console.log("El resulrado de la suma es: " + (numeroUno + numeroDos));
//             break;
//         case 2:
//             console.log(numeroUno - numeroDos);
//             break;
//         case 3:
//             console.log(numeroUno * numeroDos);
//             break;
//         case 4:
//             console.log(numeroUno / numeroDos);
//             break;
//     }
// }

// let index = 10;
// while (index < 20) {
//     let numeroUno = Number(prompt("Ingrese un número: "));
//     let numeroDos = Number(prompt("Ingrese un número: "));
//     let operacion = parseInt(prompt("Seleccione la operación: \n1 - Sumar \n2 - Resta \n3- Multiplicacion \n4- Dividir"))
//     switch (key) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
//     index++
// }

// let repetir = true; /*Centinela*/
// let index = 0; // Contador para acumular las veces ejecutadas.
// while (repetir) {
//     let estado = prompt("Desea repetir el codigo: \n1- para Si. \n2- para No."); /*condicional de estado para el centinela*/ 
//     if(estado == "2"){
//         repetir = false;
//         index++
//     }
//     console.log(index ); 
// }


let repetir = true;
let index = 0;
do{
    let estado = prompt("Desea repetir el codigo: \n1- para Si. \n2- para No."); /*condicional de estado para el centinela*/ 
    if(estado == "2"){
        repetir = false;
        index++;
    }
    console.log("Estado del ciclo: " + repetir);
    index++
}while (repetir);