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


// let repetir = true;
// let index = 0;
// do{
//     let estado = prompt("Desea repetir el codigo: \n1- para Si. \n2- para No."); /*condicional de estado para el centinela*/ 
//     if(estado == "2"){
//         repetir = false;
//         index++;
//     }
//     console.log("Estado del ciclo: " + repetir);
//     index++
// }while (repetir);

// Ejercicios de practica.

// for(index = 1; index <=10; index++){
//     console.log(index);   
// }


// let numero = parseInt(prompt("Ingrese un numero para establecer su tabla de multiplicar"));
// let index = 0;
// while(index < 10){
//     index = numero * index;
//         index++
    
    
//     console.log(index);
// } 

//Ejercicios de practica pedidos a la innteligencia artificial. 

const numeros = [12, 1, 45, 11, 13, 14, 46, 95, 32, 2, 13, 18, 1, 33];
const sumaPares = (numeros) => {
    let suma = 0
    for(i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0 ){
            suma += numeros[i]
        }
    }
    return suma
}
console.log(sumaPares(numeros));


for(j = 0; j < numeros.length; j++){
    console.log(numeros)
    break
}

