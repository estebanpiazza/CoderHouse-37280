let modoOscuro = false; // Variable Bandera o Flag

function cambiarModo() {
  if (modoOscuro) {
    document.getElementById("cuerpo").style.backgroundColor = "white";
    document.getElementById("titulo").style.color = "black";
    document.getElementById("parrafoPrincipal").style.color = "black";
    modoOscuro = false;
    
  } else {
    document.getElementById("cuerpo").style.backgroundColor = "black";
    document.getElementById("titulo").style.color = "white";
    document.getElementById("parrafoPrincipal").style.color = "white";
    modoOscuro = true;

  }
}

/*****************************/

function contarHasta(){
    let numero = document.getElementById("valor").value
    let numeroParseado = parseInt(numero)
    let numeroArray = []
    for (let i = 0;i<numeroParseado;i = i +2){
        numeroArray.push(i)
    }
    document.getElementById("contados").innerText=numeroArray
}

/*****************************/

function saludar(){
    console.log("Hola persona, esta es la consola")
}

saludar()

/*****************************/
function Usuario(nombre,mail,contrasenia){
    this.nombre = nombre;
    this.mail = mail;
    this.contrasenia = contrasenia;

}

function registrar(){
    let nombreEscrito = document.getElementById("nombre").value
    let mailEscrito = document.getElementById("mail").value
    let contraseniaEscrita = document.getElementById("contrasenia").value

    let usuarioNuevo = new Usuario (nombreEscrito,mailEscrito,contraseniaEscrita)
    console.table(usuarioNuevo)

}

/*****************************/
let productos =[
    {id:0,
    nombre:"Jabon",
    precio:100},
    {id:1,
    nombre:"Toalla",
    precio: 1000},
    {id:2,
    nombre:"Shampoo",
    precio:600},
]
/* let productosString = JSON.stringify(productos)
console.log(productosString)
document.getElementById("resultado").innerText=  productosString
 */
function mostrarProductos(){
    
    let id = document.getElementById("numeroBuscado").value
    let productoEncontrado = productos.find(elemento => elemento.id == id)
    let productoEncontradoStringify = JSON.stringify(productoEncontrado)
    document.getElementById("resultado").innerText= productoEncontradoStringify
    // ` ID ${productoEncontrado.id} Nombre ${productoEncontrado.nombre} Precio ${productoEncontrado.precio}`
    console.log(productoEncontrado)
}



