const express = require ('express');
const conectarDB = require('./config/db');
const cors = require ("cors");
const dotenv = require('dotenv');


dotenv.config();

//creando el servidor
const app = express();

//Conectar a la BD
conectarDB();
app.use(cors())

app.use(express.json());


app.use('/api/registros', require('./routes/usuario'));


app.listen(process.env.PORT || 4000, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${process.env.PORT}`);
})