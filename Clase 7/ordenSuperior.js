//Función normal
function suma(a,b){
    let c = a + b
    return c
}
console.log( suma(1,2) )

//Función de orden superior
function mayorQue(n){
    return (m) => m > n 
}
let mayorQueDiez = mayorQue(10)
console.log(mayorQueDiez(12))
console.log(mayorQueDiez(8))

//Callback
function doble(x){
    return x*2
}
function mitad(x){
    return x/2
}
function pedirNumero(X,callback){
    console.log(callback(X))
}
pedirNumero(2,doble)
pedirNumero(8,mitad)
console.log("--------------------------")
//Ejemplos concretos:
//forEach
let array1 = [1,2,3,4,5]
//forEach > Para cada
array1.forEach( (num) => console.log(num) );
/* function paraCada (array){
*   for(let i = 0; i < array.length;i++){
*       console.log(array[i])
*   }
*  }
*/

//Metodo find
const arrayDeObjetos = [
    {nombre:"Esteban", apellido:"Piazza",edad:29},
    {nombre:"Nicolas",apellido:"Krein",edad:26},
    {nombre:"Braian", apellido:"Silva", edad:22}
]

let resultado1 = arrayDeObjetos.find((elemento) => elemento.nombre === "Esteban");
let resultado2 = arrayDeObjetos.find((elemento) => elemento.nombre === "Pepito");

console.log(resultado1);
console.log(resultado2);

let mayoresA25 = arrayDeObjetos.filter((elemento) => elemento.edad > 25)
console.log(mayoresA25)
//Some()
let existe = arrayDeObjetos.some((elemento) => elemento.nombre ==="Esteban")
let noExiste = arrayDeObjetos.some((elemento) => elemento.nombre ==="Nombre Falso")
console.log(existe)
console.log(noExiste)

//Map
let cumplieronAnios = arrayDeObjetos.map((elemento) => {
    return{
    nombre: elemento.nombre,
    apellido: elemento.apellido, 
    edad : elemento.edad + 1,
}})

console.log(cumplieronAnios)

//Reduce()
let arrayDeNumero = [1,2,3,4,5]
let factorial = arrayDeNumero.reduce((acumulador,elemento)=>acumulador*elemento, 1 )
console.log(factorial)

//Sort
let arrayDesordenado = [4,6,2,3,5,6]
console.log(arrayDesordenado.sort((a,b) => a-b ) )
console.log(arrayDesordenado)
console.log(arrayDesordenado.sort((a,b) => b-a ) )
console.log(arrayDesordenado)


console.log("-------------------")

console.log(Math.PI)
console.log(Math.PI*2)
console.log(Math.min(1,2,3))
console.log(Math.max(1,2,3))
console.log(Math.floor(1.99))
console.log(Math.ceil(1.001))
console.log(Math.round(1.99))
console.log(Math.round(1.001))
console.log(Math.sqrt(9))

// Entre 0 y 1 tengo infinitos valores.
console.log(parseInt(Math.random()*10))
//1000000.01
let number= 100000000.5
console.log(new Intl.NumberFormat().format(number));

console.log(new Date())

const nacimientoDelProfe = new Date("January 27,1993")
console.log(nacimientoDelProfe)
console.log(nacimientoDelProfe.getDate())
console.log(nacimientoDelProfe.getMonth())
console.log(nacimientoDelProfe.getFullYear())
/* Toman la fecha de hoy y le restan la fecha de nacimiento de ustedes, y pasan el valor a dias */
