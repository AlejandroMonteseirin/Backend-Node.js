
//mock en javascript puro de la base de datos, Aqui se conectaria Node.js a la base de datos que quisieramos.
var list = [];

//añade un mensaje al listado
function addMessage(message){
    list.push(message);
}

//obtiene el listado de mensajes
function getMessages(){
    return list;
}

//borra el listado de mensajes
function deleteMessages(){
    list=[];
}

module.exports ={
    add: addMessage,
    list: getMessages,
    delete: deleteMessages
}