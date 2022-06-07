console.log("Hola")
setTimeout( () => { console.log("Todavia no me fui")},5000)
console.log("Chau")

const eventoFuturo =  (res) => {
    return new Promise((resolve,reject) => {
        if(res){
            resolve("Promesa resuelta")
        }else{
            reject("Promesa no resuelta")
        }
    })
}
console.log(eventoFuturo())
eventoFuturo(true).then((response) =>console.log(response)).catch((error)=>console.log(error))

/* const eventoFuturo2 =  (res) => {
    return new Promise((resolve,reject) => {
        setTimeout( () =>{
        res ? resolve("promesa resuelta"):reject("Promesa no resuelta")
        },2000 )
        
    })
}
console.log(eventoFuturo2(true)) */