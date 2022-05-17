console.log("chau")
//console log del document
console.log(document);
// console log del head
console.log(document.head)
//console.log del body
console.log("*-------------------*");
console.log(document.body)

console.log(document.getElementById("titular"))
console.log(document.getElementsByClassName("texto-normal"))
console.log(document.getElementsByTagName("p"))

let titular = document.getElementById("titular")

console.log(titular)


let paises = document.getElementsByClassName("paises")
console.log(paises[0])
console.log(paises[0].innerHTML)
console.log(paises[1].innerHTML)
console.log(paises[2].innerHTML)
// innerHTML me toma el contenido de la etiqueta

let contenedores = document.getElementsByTagName("div")
console.log(contenedores[0].innerHTML)
console.log(contenedores[1].innerHTML)
console.log(contenedores[2].innerHTML)

function cambiarTexto(){
let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
titulo.innerText="Otra cosa"
console.log(titulo.innerText)
}

let container = document.getElementById("vacio")
container.innerHTML = "<h2>Hola mundo</h2><p>Lorem ipsum</p>"
container.className="texto-creado-js"

/*
* 1) crear la estructura html basica y enlazarla con javascript
* 2) hacer que javascript escriba el h1 de la pagina
* 3) Usar un boton para modificar un texto. 
*/
let titular5 = document.createElement("h5")
titular5.innerText ="Soy un titular"
document.body.append(titular5)
let divVacio = document.getElementById("vacio")
let eliminarAlgo = () => divVacio.remove()


function mostrarValores(){
    let edad = document.getElementById("edad").value
    let nombre = document.getElementById("nombre").value
    document.getElementById("datos").innerText=
    `Su nombre es ${nombre} y su edad es ${parseInt(edad)+1}`
    // `` back-tick
    //"Su nombre es: " + nombre + ". Su edad es: " + edad
}
let numero = 10
console.log(`Si le sumo un numero a: ${numero} me da por resultado: ${numero+1}`)
console.log("Si le sumo un numero a: " + numero + " me da por resultado: " + (numero+1))

/* 1) Crear un div con un parrafo y llamarlo con query selector
2) Cambiarle el texto cn value usando un template literal */
