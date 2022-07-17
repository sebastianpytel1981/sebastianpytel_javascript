// if (true) {
//     alert ("Es true")

// }

// if (false) {
//     alert ("Es true")

// }

// let num = 100

// if (num > 150) {

//     alert  ("El numero es mayor a 150")
// }

// let num = 1000

// if (num > 150) {

//     alert  ("El numero es mayor a 150")
// } else {
//     alert ("El numero es menor a 150")
// }

// ejercicio
// Bar - > 18 años para ingresar

// let edad = prompt ("Ingrese su edad")


// let edad = 10
// if (edad >= 18) {

//     alert ("Puede ingresar")
// } else {
//     alert ("No Puede ingresar")
// }

//sino...si
// let edad = "hola"
// if (edad >18)  {
//     alert ("Puede ingresar")
// } else if (edad <18 ) {
//     alert ("No Puede ingresar")
// } else  {
//     alert ("Tiene 18, puede ingresar")
// }

// otro ejemplo

/* let edad = 18

if (edad >18)  {
    alert ("Puede ingresar")
} else if (edad <18 ) {
    alert ("No Puede ingresar")
} else  if (edad == 18){
    alert ("Tiene 18, puede ingresar")
} else  {
    alert ("no ingreso su edad")
} */

//parseInt
// let a = "10"  //string
// console.log (a + 10) // concateno

// a = parseInt (a) // lo paso a numero entero
// console.log (a + 10) //concateno

//parseFloat es para usar decimales
// let a = "50" //string
// console.log (a + 10.40) // concateno

// a = parseFloat (a) // lo paso a numero float
// console.log (a + 10.40) //concateno



//ejemplo con prompt y parseInt
// ejercicio
// Bar - > 18 años para ingresar
/*
 let edad = parseInt (prompt ("Ingrese su edad"))


if (edad >= 18) {

alert ("Puede ingresar")
} else if (edad <18 ) {
    alert ("No Puede ingresar")
} else  if (edad == 18){
    alert ("Tiene 18, puede ingresar")
} else  {
    alert ("no ingreso su edad")
} */


//operadores logicos

// if (edad == 18) // un solo dato


// // AND &&, se tienen que cumplir todas las condiciones

// // color = blanco and botones == true -> control del aire

// let esBlanco = true
// let tieneBoton = true
// if { esBlanco && tieneBoton} //evalua si es blanco y tiene botones


// // OR, se tiene que cumplir una sola condicion (true)

// let esBlanco = true
// let tieneBoton = true
// if { esBlanco  || tieneBoton} // es blanco o tiene botones, alt + 124



// ejemplo
// let nombreIngresado = prompt ("Ingrese su nombre")
// let apellidoIngresado = prompt ("Ingrese su Apellido")

// if ((nombreIngresado !="") && (apellidoIngresado !="")) {
//      alert ("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado)
// } else { 
//    alert ("Error: Ingrese nombre y apellido") 
// }

// /n es para que haga salto de linea

// let nombreIngresado = prompt ("ingrese su nombre");
//         //ES DIFERENTE
// if (( nombreIngresado  !="") && ((nombreIngresado == "EMMA") || (nombreIngresado == "emma") ))
// { 
//     alert ("Hola Emma");
// } else { 
//     alert ("Error: ingresar nombre");
// }

//FOR
//mostrar un numero desde 0 a 10

//for (desde ; hasta ; incremento o decremento ) { ......}
// let num = 100
// num++ //101, es para incrementar de a 1
// num + 1 = 101
// // num + 5 = 105
// num-- //decrece 1


// //otro eje de for
// for (let i = 0; i < 11; i++) {

// alert (i)
// }

// //opcion 2 let i fuera del codigo
// let i = 0
// for (i ; i < 5 ; i++) {
//     alert (i)
// }


// //ej inc console.log 100 numeros
// for ( let inc = 0 ; inc <= 100 ; inc++)
// { 
//     console.log (inc)
// }


// // ejmplo de turnos
// for ( let i = 1; i =< 20 ; i++) {

//     let ingresamosNombre = prompt ("ingresar un nombre");
//     alert ("Turno Nro " + i + "Nombre:" + ingresamosNombre);
// }

// pegar ejemplos

// let repetir = true

// while (repetir) {
//     console.log ()
// }

// EJEMPLO DE WHILE
//evalua y despues hace

// let entrada = prompt ("ingrese un dato")

// while (entrada != "ESC") {
//     alert ("el usuario ingreso " + entrada)
//     entrada = prompt ("ingresar otro dato")
// }

//DO...WHILE
//hace y despues evalua

// let numero = 0; 

// do { 
//     numero = prompt ("ingresa numero")
//     console.log (numero)


// } while (pasrseInt(numero));



// ejercicio

// let entrada = prompt ("ingrese un dato")

// if (parsInt (entrada) > 1000 ) {
//    alert ("el número es mayor a 1000") 
   
// } else {alert ("el número es menor a 1000") }


// EJEMPLO FUNCIONA
// let entrada = prompt ("ingrese un dato")

// if (parseInt(entrada) > 1000) {
//    alert ("el número es mayor a 1000");
   
// } else if (entrada.toLowerCase() === "hola") {
//      alert ("Hola, usuario");
// } else if  (parseInt (entrada)>=10 && parseInt (entrada)<=50) {
  
//     alert ("tu número está entre 10 y 50")

// }   else { 
//     alert ("Lo siento, no tengo respuesta para tu petición")

// }


// ej Enrique
// const promptRequest \= prompt(

//     “Ingresa un dato y espera una respuesta inesperada!”
    
//     );
    
//     if (parseInt(promptRequest) > 1000) {
    
//     alert(“El numero que has ingresado es mayor a 1000”);
    
//     } else if (promptRequest.toLowerCase() \=== “hola”) {
    
//     alert(“Hola, usuario!”);
    
//     } else if (parseInt(promptRequest) >= 10 && parseInt(promptRequest) <= 50) {
    
//     alert(“tu número está entre 10 y 50”);
    
//     } else {
    
//     alert(“Lo siento, no tengo respuesta para tu petición :(”);
    
//     }

//PRACTICA EJERCICIO OK
// let entradaDato = prompt ("Ingrese un dato")

// if (parseInt (entradaDato) > 1000) {
//     	alert ("El número es mayor a 1000")
// } else if (entradaDato.toLowerCase() === "hola") {
//     alert ("Hola Usuario")
// } else if (parseInt (entradaDato) >= 10 && parseInt (entradaDato) <= 50) {
//     alert ("su número está entre 10 y 50")
// } else {
//     alert ("no tengo respuesta para su petición")
// }