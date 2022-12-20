const mongoose = require('mongoose')

const publicacionScheme = new mongoose.Schema(
    {
        titulo: {
            type: String,
            require: true
        },
        descripcion:{
            type: String
        },
        imagenUrl:{
            type: String,
            default: 'https://www.buenaventura.gov.co/media/img/20160919_san_cipriano_rio-1000_590.jpg'
        },
        comentarios:[]
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Publicacion', publicacionScheme)