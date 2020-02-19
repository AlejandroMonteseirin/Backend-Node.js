const express = require('express'); //Libreria que utilizamos para esta aplicación de node.js
var app = express();
var bodyParser = require('body-parser') //Necesario para obtener los bodys en los formatos que deseamos


const router = require('./Network/routes');//router de mensajes




app.use('/app', express.static('public'));//En esta carpeta iran los archivos estaticos( como un frontend)
app.use(bodyParser.json());//para poder obtener los body de las llamadas 


router(app); //le pasamos al router las rutas



app.listen(3000);//hacemos que la aplicación escuche en el puerto 3000
console.log("usando el puerto 3000, http://localhost:3000");
