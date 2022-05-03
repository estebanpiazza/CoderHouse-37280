
let hasta = 10;
//i = i + 1
for(let i = 0; i<10 ;i++ ){
    // inicio ; condición ; variación
    console.log(i);
}
console.log("*------------------------------*")
for(let j = 0;j<10;j=j+2){
    console.log(j)
}
console.log("*------------------------------*")
for(let j = 1;j<10;j=j+2){
    console.log(j)
}
console.log("*------------------------------*")
/* let numeroIngresado = parseInt(prompt("Ingrese un numero: "));
for (let i = 0; i<10;i++){
    let resultado = numeroIngresado*i;
    alert(numeroIngresado + " x " + i + " = " + resultado )
}  */
console.log("*------------------------------*")
/* for (let i = 0;i<=20;i++){
    let nombreIngresado = prompt("Ingrese su nombre: ")
    alert("Turno Nº: "+i+" Nombre: "+ nombreIngresado)
}  */
console.log("*------------------------------*")
/* for (let i = 0; i<=10;i++){
    if(i==5){
        break;
    }
    alert(i)
} */
console.log("*------------------------------*")
/* for (let i = 0; i<=10;i++){
    if(i==5){
        continue;
    }
    alert(i)
} */
console.log("*------------------------------*")
let i = 0
i = 42;
console.log(i++); // muestra 42
console.log(i); // muestra 43
console.log(++i); // muestra 43
console.log(i); // muestra 43
console.log("*------------------------------*")
/*  let valor = true; //Bucle infinito tener cuidad
while(valor){
    console.log("Al infinito y mas alla");;
}  */
console.log("*------------------------------*")
let repetir = false;
do{
    console.log("Hola")
}while(repetir)
console.log("*------------------------------*")

let nombre = prompt("Ingrese su nombre: ")

while(nombre != "Salir"){
    console.log(nombre)
}

do{
    console.log(nombre)
}while(nombre!="Salir")

console.log("*------------------------------*")
let dia = prompt("Ingrese dia de la semana: ")
switch(dia){
    case "Lunes":
        console.log("hay que ir a trabajar")
    break;
    case "Sabado":
        console.log("no hay que ir a trabajar")
    break;
    default:
        console.log("No ingresate un dia de la semana")
    break;
}

if(dia =="Lunes"){
    console.log("hay que ir a trabajar")
    if(dia=="Sabado"){
        console.log("no hay que ir a trabajar")
    }

}
console.log("*------------------------------*")
// Un algoritmo que muestre hasta el numero ingresado por el usuario (for)
// Un algoritmo que muestre hasta el numero ingresado por el usuario pero solo los pares (for)
// Un algoritmo que pida usuario y contraseña y no de ingreso hasta que la contraseña coincida (while)
// Un algoritmo que me diga que feriados tiene el mes (switch)
//Registro el usuario
let usuarioR = prompt("Registre su usuario")
let contraseniaR = prompt("Registre su contraseña")
//Inicio de sesion
let usuarioI = prompt("ingrese su usuario")
let contraseniaI = prompt("ingrese su contraseña")
while (contraseniaR != contraseniaI){
    console.log("Contraseña erronea")
    contraseniaI = prompt("ingrese su contraseña")
}
console.log("ingreso exitoso")


