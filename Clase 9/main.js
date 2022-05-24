let botonPrincipalv1 = document.getElementById("boton-principalv1")
// objeto .addEventListener ( evento, función )

function saludar(){
    console.log("me hiciste clic")}

botonPrincipalv1.addEventListener('click',saludar)

/************************************/

let botonPrincipalv2 = document.getElementById("boton-principalv2")

botonPrincipalv2.onclick = () => (console.log("Respuesta 2"))
/************************************/

function saludarv3(){
    console.log("me hiciste clic soy la v3")}

/************************************/
let cantidad = 0
let multiplesEventos = document.getElementById("multiples-eventos")

multiplesEventos.addEventListener('mouseover',consologear)
function consologear(){
    console.log("pasaron el mouse por arriba")
    
    cantidad = cantidad + 1
    console.log(cantidad)
}
multiplesEventos.addEventListener('mouseout',consologear2)
function consologear2(){
    console.log("salieron de mi espacio")
}

/************************************/
let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")

input1.onkeyup = () => (console.log("keyup"))
input2.onkeydown = () => (console.log("keydown"))

window.onload(alert("hola"))