const message = require('../components/messages/network');


//Todas las rutas de cada modelo
const routes = function (server){
    server.use('/message',message)
}


module.exports= routes;