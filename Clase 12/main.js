/**********Sugar Syntax*********** */
let edad = 29
edad++ // contadora
console.log(edad)
// for(let i = 0; i < length; i++){}
edad += 10 // acumulando
// edad = edad + 10
console.log(edad)
++edad
console.log("++ primero")
console.log(edad)
edad++
console.log("++ despues")
console.log(edad)

/**************Operador ternario************** */

let edad2 = 18

let resultado = edad2 > 18 ? console.log("puede pasar")console.log("Hola") : console.log("no puede pasar") // return implicito


/**************Operador AND ************/
const usuario3 = {
    nombre:"Esteban",
    edad:29,
}
const ingresoUsuario = usuario3.edad> 18 && new Date()

console.log(ingresoUsuario)

/**************Operador OR ************/

let edad4 = 19
let altura2 = 1.50
// && doble ampersan es AND
if (edad4 >19 || altura2 > 1.51){
    console.log("puede pasar")
}else{
    console.log("no puede pasar")
}

let usuario1 = {
    nombre:"Juan Perez",
    edad: 29,
}

const usuario2 = null

console.log(usuario1 || "El usuario no existe")
console.log(usuario2 || "El usuario no existe")


/*************Desestructuración************* */

const item = {
    item_id:1234,
    product_name: "Some product",
    price_per_unit: 5600
}

const {
    item_id : id,
    product_name:nombre,
    price_per_unit:precio,
} = item

console.log(id);
console.log(nombre);
console.log(precio);

let producto = {
    id : 123,
    nombre : "Bolsa de agua caliente"
}
let producto2 = {
    id : 321,
    nombre : "Teclado gamer grb con muchos teraflops"
}

function desestructurar( {id,nombre} ){
    console.log(`El id es ${id} y el nombre de producto: ${nombre}`)
}

desestructurar(producto)
desestructurar(producto2)

window.addEventListener('click',({x,y}) => console.log(x,y))


/**Desestructurar array */

let arrayNuevo = ["Vanina","Nicolas","Juan","Cristian","Braian"]

let [a,b,c,d,e] = arrayNuevo
console.log(a,b,c,d,e)
console.log("El/la mejor tutor/a es " + e)

console.log(arrayNuevo)
console.log(...arrayNuevo) // ... spread operator

const numeros = [1,2,3,5,6,7]
console.log(Math.max(numeros))
console.log(Math.max(...numeros))

function sumar (a,b,...masValores){

}