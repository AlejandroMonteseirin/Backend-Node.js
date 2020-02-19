const express= require('express');
const router =express.Router();
const respuestas = require('../../Network/respuestas');
const controller = require('./controller');


//Rutas de mensajes


//obtiene el listado de mensajes
router.get('/',function(req,res) {
    controller.getMessages()
    .then((messageList)=>{
        respuestas.success(req,res,messageList,200)
    })
    .catch(e=>{
        respuestas.error(req,res,"Error obtención de los mensajes",500,e)

    });
});

//Añade un mensaje al listado
router.post('/',function(req,res) {
    controller.addMessage(req.body.user,req.body.message).then(()=>{
        respuestas.success(req,res,"Exito en la creación",200)
    })
    .catch(e=>{
        respuestas.error(req,res,"Error en la creación, informacion invalida",400,e)

    });
});

//Borra el listado de mensajes
router.delete('/',function(req,res) {
    controller.deleteMessages().then(()=>{
        respuestas.success(req,res,"Borrado correctamente!",201);
    }).catch(e=>{
        respuestas.error(req,res,"Error en la eliminación",500,e)
    });
});


module.exports = router;