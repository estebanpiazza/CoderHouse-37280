/* const ARRAY1 = ["hola"]
ARRAY1.push("chau")
console.log(ARRAY1) */
/*****************************************/

// const/let nombre = { propiedad : valor , }

const PROFESOR = {
    nombre: "Esteban",
    apellido: "Piazza",
    edad: 29,
    trabajando: true,
}

console.log(PROFESOR)
console.log(PROFESOR.nombre)
console.log(PROFESOR.edad)
console.log(PROFESOR["trabajando"])

PROFESOR.nombre = "Juanito"
console.log(PROFESOR.nombre)
PROFESOR.edad = PROFESOR.edad + 1
console.log(PROFESOR.edad)

const ALUMNO = {
    nombre: "Angus",
    apellido: "Rodriguez",
}
console.log(ALUMNO.nombre)

function ESTUDIANTE (nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.festejar = function (){console.log("Soy "+ this.nombre + " y estoy feliz de que aprobe")}; //metodo
    this.cumplierAnios = function(){console.log(edad+1)}
}

const ESTUDIANTE1 = new ESTUDIANTE("Guillermo", "DABENIGNO", 20)
const ESTUDIANTE2 = new ESTUDIANTE("Diego","Hernandez",18)
console.log(ESTUDIANTE1)

/*
* Crear objeto con 3 propiedades
* hacen console.log de esas 3 propiedades
* crean una funcion constructora para otro objeto
* crean una instancia de esa función constructora
*/

console.log(PROFESOR.nombre.toUpperCase())
console.log(PROFESOR.apellido.toLowerCase())
console.log(PROFESOR.nombre.length)

ESTUDIANTE1.festejar()
ESTUDIANTE2.festejar()
ESTUDIANTE2.cumplierAnios()

console.log("edad" in ESTUDIANTE1)
console.log("direccion" in ESTUDIANTE1)

for(const propiedad in PROFESOR){
    console.log(PROFESOR[propiedad])
}
// let i = 0;i < valor ; i++
// valor[i]

class Tutor{
    constructor(nombre,apellido,edad,camada){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.camada = camada;
    }
    hablar (){
        console.log("Hola soy "+this.nombre)
    }
}

const TUTOR1 = new Tutor("Cristian","Cabrera",20,7)
console.log(TUTOR1.nombre)
TUTOR1.hablar()

/* Una constructora con la sintaxis nueva
* un metodo para la constructora que haga un console.log
* un metodo para la constructora que cambie alguna propiedad interna
* crear una instancia de ese objeto
* consologearlo
*/