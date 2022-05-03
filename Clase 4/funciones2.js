
saludar("Esteban")
//saludarVariable("Alfredo") eso devuelve error

function saludar(nombre){
    console.log("hola " + nombre)
}

let saludarVariable = function (nombre){
    console.log("hola " + nombre)
}

saludarVariable("Alfredo") // esto funciona
