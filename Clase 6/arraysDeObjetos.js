let profesor1 = {
    nombre:"Esteban",
    apellido:"Piazza",
    tutor:false,
    estudiante:false,
    profesor: true,
    edad: 29,
}
let tutor1 ={
    nombre:"Juan",
    apellido:"Chapur",
    tutor:true,
    estudiante:false,
    profesor:false,
    edad:22,
}
console.log(profesor1)
console.table(profesor1)
const arrayPersonal = [profesor1,tutor1]
console.table(arrayPersonal)
console.log(arrayPersonal[0])


const productos = [
    {id:1,nombre:"Arroz"},
    {id:2,nombre:"Pan"},
    {id:3,nombre:"Fideos"}
]

for (const producto of productos){
    console.log(producto.id + " " +producto.nombre );
}
