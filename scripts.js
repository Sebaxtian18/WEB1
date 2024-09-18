// function unaFuncion(){

// }
// let numeros = [1,"jaime",true,unaFuncion,5,6]
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
// console.log(numeros[5]);
// //El console imprime em pantalla la posición 5 porque el arreglo comienza acontar apartir del 0

// let numeros = [1, 5, 3, 6, 2, 8, 9, 10, 20, 4, 5, 5]
// if (numeros[0] == 1){
//     console.log("Los numeros son iguales");
// }
// switch (numeros[8]) {
//     case 20:
//         console.log("El numero en la posición 8 es el: " + numeros[8]);

//         break;
//     case 3:
//         console.log("El numero en la posición 3 es el: " + numeros[2]);

//         break;

//     default:
//         break;
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let index = 0; index < 9; index++) {
//     if (numeros[index] % 2 == 0 ) {
//         console.log("El numero: " + numeros[index] + " es un numro par.");

//     }

// }

// let estudiantes = ["Lina", "Paola", "Carol", "David", "Emmanuel", "Mateo"]
//     let nombre = prompt("Ingrese el nombre del estudiante que esta buscando")
//     for (let index = 0; index < estudiantes.length; index++) {
//           if (nombre == estudiantes[index]) {
//             console.log("El estudiante " + nombre + " existe en la base de datos.");

//           }      

//     }

// let personas = ["Camila", "Luisa", "Felipe", "Ana", "Tomas", "Andrea"]
// let edades = [17, 22, 35 , 15, 23, 18]

// for (let index = 0; index < personas.length; index++) {
//      if (edades[index] >= 18 ) {
//         console.log("La persona " + personas[index] + " es mayor de edad");

//      }

// }

// let personas = []
// let edades = [] 
// for (let index = 0; index < 5; index++) {
//     let persona = prompt("Ingrese el nombre de la persona: ")
//     let edad = prompt("Ingrese la edad de la persona: ")
//     personas[index] = persona;
//     edades[index] = edad;    
// }
// for (let index = 0; index < 5; index++) {
//     // Se puede utilizar un condicional para mostrar solo las personas mayores de edad
//         console.log(personas[index] + " y su edad es: " + edades[index]);
// }


// // Ejercicio practido de vectores
// let bienestar = [] 
// let aseo = []
// let hogar = []
// let mascotas = []
// let categoria = [bienestar, aseo, hogar, mascotas]


// let nombres = ["Andrea"]
// console.log(nombres)

// nombres.push("Jaime")
// nombres.push("Luisa")
// nombres.push("Camila")

// console.log(nombres)

// nombres.unshift("Camilo")
// nombres.unshift("Karen")
// console.log(nombres);

// nombres.pop()
// nombres.pop()
// console.log(nombres)

// nombres.shift()
// nombres.shift()
// console.log(nombres);

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numeros.splice(0, 1)


// Actividad Utilizanto lo aprendido en clase. 

let nombreEmpleado = []
let documentoEmpleado = []
let edadEmpleado = []
let areaEmpleado = []
let horasTrabajadasEmpleado = []
let valorHoraEmpleado = []
let salarioEmpleado = []

//Captura de datos
for (let index = 0; index < 20; index++) {
    let nombre = prompt("Ingrese su nombre completo:")
    let documento = prompt("Ingrese su número de documento:")
    let edad = prompt("Ingrese su número telefonico:")
    let area = Number(prompt("Su area de trabajo es: \n 1- TI, \n 2- Recursos humanos, \n 3- Salud y seguridad, \n 4- Bienestar, \n 5- Operativos"))
    switch (area) {
        case 1:
            area = "TI"
            break;
        case 2:
            area = "Recursos humanos"
            break;
        case 3:
            area = "Salud y seguridad"
            break;
        case 4:
            area = "Bienestar"
            break;
        case 5:
            area = "Operativos"
            break;
        default:
            break;
    }
    let horasTrabajadas = Number(prompt("Ingrese la cantidad de horas trabajadas: "))
    let valorHora = Number(prompt("Ingrese el valor por hora laborada segun su area: "))
    let salario = (horasTrabajadas * valorHora)

    //Asignación de los valores capturados
    nombreEmpleado[index] = nombre
    documentoEmpleado[index] = documento
    edadEmpleado[index] = edad
    areaEmpleado[index] = area
    horasTrabajadasEmpleado[index] = horasTrabajadas
    valorHoraEmpleado[index] = valorHora
    salarioEmpleado[index] = salario

}


//Llamado a mostrar por consola de los arrays 
for (let index = 0; index < 20; index++) {
    if (areaEmpleado[index] == "TI" && salarioEmpleado[index] >= 2000000) {
        console.log(nombreEmpleado[index] + " " +  documentoEmpleado[index] + " " + edadEmpleado[index] + " " + areaEmpleado[index] + " " + valorHoraEmpleado[index] + " " + horasTrabajadasEmpleado[index] + " " + salarioEmpleado[index]);
    }else if(areaEmpleado[index] == "Recursos humanos" && salarioEmpleado[index] >= 2000000){
        console.log(nombreEmpleado[index] + " " +  documentoEmpleado[index] + " " + edadEmpleado[index] + " " + areaEmpleado[index] + " " + valorHoraEmpleado[index] + " " + horasTrabajadasEmpleado[index] + " " + salarioEmpleado[index]);
    }else{
        
    }
}
