

const mongoose = require('mongoose')

const usuarioScheme = new mongoose.Schema(
    {
        nombre: {
            type: String,
            require: true
        },
        mail:{
            type: String,
            require: true
          
        },
        contrasena:{
            type: String,
            require: false
        },
        
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Usuarios', usuarioScheme)