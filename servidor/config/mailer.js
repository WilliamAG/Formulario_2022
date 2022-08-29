const nodemailer = require('nodemailer')
const Registro = require('../models/Registro')

const createTrans = () => {
    var transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'alopzw@gmail.com',
            pass: 'opanbmlonowieuoo',
        },
    })
    return transport
}

const sendMail = async (registro) => {
  
        const transporter = createTrans()
        const info = await transporter.sendMail({
            
            to: `${registro.correo}`,
            subject:
                '!HOLA ' +
                `${registro.nombre} ` +
                `${registro.apellido}! `,
                
            text:
                ' TU REGISTRO EN EL FORMULARIO HA SIDO EXITOSO    '+
                ` Tu DNI es: ${registro.dni}    `+
                ` Fecha Nacimiento: ${registro.fnacimiento}    `,
        })

        console.log('Mensaje enviado %s' +
                `${registro.nombre} ` + info.messageId);

        return
}
        
exports.sendMail = (registro) => sendMail(registro)


