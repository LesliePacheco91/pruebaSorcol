const express = require("express");
const fs = require("fs");
const router = express.Router();

const PAT_ROUTES = __dirname;

// extraer el nombre el archibo sin la extención
const removeExtention = (fileName ) => {
    return fileName.split('.').shift();
}

fs.readdirSync(PAT_ROUTES).filter((file)=>{

    const name = removeExtention(file);

    if(name !== 'index'){

        router.use(`/${name}`, require(`./${file}`)) // llamará la ruta con el nombre del archivo http:localhost:3001/prueta/tracks
    }
}); // enlista los nombres de los archivos en la carpeta rutas

module.exports = router