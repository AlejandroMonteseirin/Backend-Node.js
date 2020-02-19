
const store = require('./store')

//Controlador, tiene la lógica de negocio de las distintas funciones. Devuelve Promesas que son recibidas de desde Network.js

//Controlador de la función añadir mensaje
function addMessage(user,message){

    return new Promise((resolve,reject) =>{

        //Captura de errores
        if(!user ||!message){
            console.error("[MessageController] no hay usuario o mensaje");
            reject("Datos Incompletos!");
            return false;
        }
        
        
        const fullMessage = {
            user: user,
            message : message,
            date : new Date()
        }

        store.add(fullMessage);
        resolve(fullMessage);
    });
}

//funcion para obtener el listado de los mensajes
function getMessages(){
    return new Promise((resolve,reject) =>{
        resolve( store.list());
    });
}

//funcion para eliminar todos los mensajes
function deleteMessages(){
    return new Promise((resolve,reject) =>{
        resolve( store.delete());
    });
}

module.exports={
    addMessage,
    getMessages,
    deleteMessages
}