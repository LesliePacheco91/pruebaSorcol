/*const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        const DB_URI = await process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexión correcta a la base de datos");
    } catch(error) {
        console.log("Error al conectar a la base de datos:", error);
    }
};

module.exports = dbConnect;
*/

const mongoose = require('mongoose');

const dbConnect =  async() => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI).then(() =>{
        console.log(" CONEXION ESTABLECIDA");
    }).catch((error) =>{
        console.error(" ERROR DE CONEXION!");
    })  
};

module.exports = dbConnect