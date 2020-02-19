

//Archivo para dar formato a las respuestas y los errores. Para crear una respuesta, simplemente llamar a este archivo.

//respuesta success
exports.success =function(req,res,mensaje,status){
    res.status(status || 200).send({
        "error":'',
        "body":mensaje
    });

}
//respuesta error
exports.error =function(req,res,details,status,e){
    if(details)
        console.error('[response error]'+details+e);
    res.status(status || 400).send({
        "error":'true',
        "body":details
    });

}