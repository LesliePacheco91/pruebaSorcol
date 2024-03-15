require("dotenv").config();
const express = require("express") // ayuda a iniciar el servicio web
const cors = require("cors") // indicando esta funcio para mejorar del proceso de servicio
const app = express()
const dbConnect = require("./config/mongo");

app.use(cors())
app.use(express.json());
const port = process.env.PORT || 3000 // inicia en el puerto indicado en .env, si no existe inicia en el 3000

app.use("/",require("./routes/"));
 
app.listen(port,() => {
    console.log("Tu app esta lista por http://localhost:"+port)
})

dbConnect();