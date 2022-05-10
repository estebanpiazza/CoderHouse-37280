/* const listaNombre = [];
let cantidad = 5;
do {
    let entrada = prompt ("ingrese nombre: ");
    listaNombre.push(entrada.toUpperCase());
    console.log(listaNombre.length)
} while (listaNombre.length != cantidad)
    const nuevaLista = listaNombre.concat(["ana","ema"]);
    alert(nuevaLista) */


const eliminar = (array,valorAEliminar) => {
    let index = array.indexOf(valorAEliminar);
if(index != -1){
    return array.splice(index,1);
}else{
    return "El elemento no existe dentro del array";
}
}

const nombres = ["Esteban","Vanina","Nicolas"]
console.log(eliminar(nombres,"Esteban"))
console.log(nombres)
