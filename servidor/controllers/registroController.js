const Registro = require("../models/Registro");
const path = require('path');
const mailer = require('../config/mailer')


exports.crearRegistro = async (req, res) => {
    try{
        let registro;

        //creando el usuario
        registro = new Registro(req.body);
        await registro.save();
        mailer.sendMail(registro, true)
        res.send(registro);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerRegistros =  async (req, res) => {

    try{
        const usuarios = await Registro.find();
        res.json(usuarios)
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}