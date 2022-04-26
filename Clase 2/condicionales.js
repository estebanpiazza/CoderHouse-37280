/* let valor = true; // = asignación de valor
let edad = 29
let edadExacta = 29
let puedePasar=(edad == edadExacta)
console.log(puedePasar)
if(puedePasar){ // == comparación entre valores
    console.log("Esta apto para ingresar")
}else{
    console.log("No esta apto para ingresar")
}

if(valor){
    console.log("Es verdadero");
}
if(false){
    console.log("No vas a leer nunca esto");
} */

let a = 1; // numero
let b = "1"; // string

if(a==b){ //compara el valor
    console.log("son iguales");
}else{
    console.log("no son estrictamente igualess");
}

if(a===b){ //compara el valor y el tipo de dato
    console.log("son iguales");
}else{
    console.log("no son estrictamente iguales");
}
console.log(typeof(a))
console.log(typeof(b))

if(a!==b){
    console.log("no son iguales");
}else{
    console.log("son iguales")
}


let variable = true
console.log(typeof(variable))

if(typeof(variable)=="boolean"){
    console.log("si")
}
//Esteban
//!Esteban

let edad = 19;
let altura = 1.4;
let acompaniado = true
if(edad>=18){
    console.log("puede pasar");
}

if( (edad>=18) && (altura>=1.5)  ){ //doble ampersan
    console.log("Puede subir a la montaña rusa");
}else{
    console.log("no es apto para subir");
}

if( ((edad>=18)|| (acompaniado==true)) && (altura>=1.5) ){
    console.log("puede pasar")
}
console.log(acompaniado);
console.log(!acompaniado);
// > = 
// < =




