localStorage.setItem("nombre", "Esteban");
localStorage.setItem("edad", 29);
localStorage.setItem("profesor", true);
let variableNombre = localStorage.getItem("nombre");
console.log(variableNombre);

function guardarNombre() {
  localStorage.setItem(
    "nombreInput",
    document.getElementById("nombreAGuardar").value
  );
}
document.getElementById("nombreAGuardar").value =
  localStorage.getItem("nombreInput");

sessionStorage.setItem("nombresesion", "Hola");

function recorrer() {
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
  }
}
recorrer();
function borrar() {
  localStorage.clear();
  document.getElementById("nombreAGuardar").value = "";
}

/* Crear un formulario de 3 campos,
almancenar esos datos de forma local y crear el boton que los borre */

/****************************** */

let profesor = 
[{nombre:"Vanina",
edad:20,
profesor:false,
},
{ 
    nombre: "Esteban", 
    edad: 29, 
    profesor: true,
}];

let objetoCadena = JSON.stringify(profesor)
let objetoObjeto = JSON.parse(objetoCadena)
console.log(profesor)
console.log(objetoCadena)
console.log(objetoObjeto)
//POST
//GET