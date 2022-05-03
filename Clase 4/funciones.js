/*  function nombre (parametros){
    instrucciones
    return
} */

function saludarCualquiera(){
    console.log("Hola persona")
}
function saludar(nombre){//declaro la función
    console.log("Hola "+nombre);
}
function siguiente(numero){
    console.log(numero+1)
}


saludar("Esteban");//invoco la funcion
saludar("Maria");//invocando nuevamente la funcion, pero con un parametro distinto
saludar("Juan Carlos");
saludarCualquiera()
siguiente(1)

/*function lavarDientes(pasta,agua,cepillo){
   
}
pasta = Odol
agua = corriente
cepillo = colgate plus con triple cerda
*/


/***********************************************/

function sumarDosNumeros(numero1,numero2){
    let resultado = numero1 + numero2
    return resultado
}

function mostrarPorConsola (resultado){
    console.log(resultado)
}

sumarDosNumeros(1,2) // no se muestra en consola
mostrarPorConsola(sumarDosNumeros(1,2)) // se muestra en consola
console.log(sumarDosNumeros(10,3))

/*
* Escribir una función que reciba un numero y nos devuelva un mensaje diciendo si es par o impar. (3) >> El numero 3 es impar
* Escribir una función que reciba una edad y un nombre y nos indique cuantos años cumplira la persona el año que viene. (Esteban,29) >> Esteban cumplira 30 el año que viene.
*/
let variable2;
function primera(){
    let variable;
}

function segunda(){
    
    return  variable2-1

}

let nombre2 = "Esteban"

function saludar(nombre){
    let nombre2 = nombre
    console.log ("hola "+nombre2)
}
saludar("Gaspar")

let saludarVariable = function(nombre){
    console.log("Hola " + nombre)
} 
saludarVariable("Nicolas");

let sumarUno = (numero) => numero+1;
function sumarUnoSinArrow(numero){
    return numero+1;
}
console.log(sumarUno(2))

let saludarComplejo = (nombre) =>{
    let nombreFormal = "Hola Don " + nombre
    return nombreFormal
}
//console.log(nombreFormal)
console.log(saludarComplejo("Esteban"))

console.log("EL precio es 10000,5")

/*
* 1) Crear una función declarada que de la bienvenida al programa "Inicializando programa...."
* 2) Crear una función declarada que pida el nombre y que pida un genero y en base al genero salude como Bienvenido / Bienvenida / Bievenide + el nombre 
* 3) Crear una función anonima que tenga un parametro que muestre el siguiente de un numero
* 4) Crear una funcion anonima que muestre el siguiente y el anterior de un numero
* 5) Tomar algunas de las funciones que ya hicieron y convertirla en flecha 
*/


//Declarada:
function nombreDeLaFuncion (parametro){
    let resultado = parametro
    return resultado
}

//Expresadas o anonimas
let variableDeLaFuncion = function(parametro){
    let resultado = parametro
    return resultado
}

//Flecha
let funcionFlecha = parametro => parametro;
