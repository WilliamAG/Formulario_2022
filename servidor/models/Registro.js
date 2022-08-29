const mongoose = require ('mongoose');

const RegistroSchema =  mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    fnacimiento: {
        type: Date,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    urlimagen: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Registro',RegistroSchema);