// condicional Simple
// if (25 > 2){
//     console.log("Se cumple la condicion")
// }

//Condicional anidado
// let edad = 18;
// if(edad > 18){
//     console.log("Es mayor de edad")
// }else if(edad==18){
//     console.log("Apenas cumple la mayoria de edad")
// }else if(false){
//     console.log("No cumple con la mayoria de edad")
// }else if(false){
//     console.log("No se cumple")
// }else{
//     console.log("Ultima ejecucion")
// }

//Condicional switch
// let categoria = prompt("Ingrese la categoria: 1- tecnologia 2- fisica")
// switch(categoria){
//     case "1":
//         console.log("Esta es la categoria tecnologia");
//         break;
//     case "2": 
//     console.log("Esta es la categoria de fisica");
//         break;      
//     default:
//         console.log("No se cumplen las condiciones");
//         break;
// }



// //condicional con tablas de verdad (Conjuncion(Y - &&) y disyuncion(O -||))
let salario = 4000;
if(salario > 10000 && salario < 12000){
    console.log("Es verdadero")
}else if(salario == 11000 || salario <= 1000){
    console.log("Es verdadero")
}else if(salario < 10000 && salario == 5000){
    console.log("El salario es minimo")
}else{
    console.log("El salario no cumple los estanndares.")
}
