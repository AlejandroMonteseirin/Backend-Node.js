const express = require('express');

var app = express();

app.use("/", function(req,res) {
    res.send("hola");
});


app.listen(3000);
console.log("usando el puerto 3000");
