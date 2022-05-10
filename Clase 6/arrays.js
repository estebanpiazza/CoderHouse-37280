const arrayConst = ["Esteban",29,true];
console.log(arrayConst);
console.log(arrayConst[0]);
console.log(arrayConst[1]);
console.log(arrayConst[2]);
console.log(arrayConst[3]);
let nombreProfesor = arrayConst;
console.log(nombreProfesor);

const arrayNumeros = [1,2,3,4,5]
for(let i = 0; i < 5; i++){
    console.log(arrayNumeros[i]) // 0 - 1 - 2 - 3 - 4 - 5
}


const arrayNumeros2 = [1,2,3,4,5,6]
console.log("el largo del array es: " + arrayNumeros2.length)

for(let i = 0; i < arrayNumeros2.length; i++){ //largo
    console.log(arrayNumeros2[i]) // 0 - 1 - 2 - 3 - 4
}


/******** */
//Metodo que modifica el array
//array.propiedad
//array.metodo()
const marcasAuto = ["ford","ferrari","renault"];
//agregar elemetnos
console.log(marcasAuto);
marcasAuto.push("bmw");
console.log(marcasAuto);
console.log(marcasAuto[3]);
marcasAuto.unshift("toyota");
console.log(marcasAuto);

//quitar elementos
let marcaEliminada = marcasAuto.pop() // elimina el ultimo
console.log("marca eliminada: " + marcaEliminada)
console.log(marcasAuto)

let marcaEliminada2 = marcasAuto.shift() // elimina el primero
console.log("marca eliminada: " + marcaEliminada2)
console.log(marcasAuto)

// metodo splice
const arrayposiciones = ["primera posicion","segunda posicion","tercera posicion"]
arrayposiciones.splice(1,1)
console.log(arrayposiciones)

const arrayposiciones2 = ["primera posicion","segunda posicion","tercera posicion","cuarta posicion"]
let arrayposiciones3 = arrayposiciones2.splice((arrayposiciones2.length/2),arrayposiciones2.length/2)

console.log(arrayposiciones2)

console.log(arrayposiciones3)

/*************************/
//join
const arrayNombres = ["Esteban","Nicolas","Vanina"]
console.log(arrayNombres.join(" - "))


/************************/
//concat
const perros = ["Ashton", "Firulais"]
const gatos = ["Donna","Michi","Snowball"]

const mascotas = perros.concat(gatos)
console.log(mascotas)

/********************** */
//slice
const colores = ["rojo","azul","verde","amarillo","naranja","celeste","leandro"]
console.log("a partir de aca")
const noPrimarios = colores.slice( colores.length/2 , colores.length)
console.log(noPrimarios)

/********************** */
//indexof
const estudiantes = ["Guillermo","Gaspar","Wally","Juanito","pepito"]
console.log(estudiantes.indexOf("Wally")) // 2

const estudiantesExpulsados = estudiantes.slice(estudiantes.indexOf("Wally",estudiantes.lenght))
console.log(estudiantesExpulsados)

/************/
//includes
const animales = ["perro","gato","palomas","ratas"]
console.log(animales.includes("perro"))
console.log(animales.includes("monos"))

if(animales.includes("perro")){
    console.log("El perro sera bienvenido")
}else{
    console.log("No aceptamos ese tipo de animales")
}

/************/
//reverse
const ganadores = ["Vanelope","Ralph","Felix","Bowser"]
ganadores.reverse()
console.log(ganadores)

