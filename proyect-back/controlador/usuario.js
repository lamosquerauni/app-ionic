const  mongoose  = require('mongoose')
const Usuario  = require('../modelos/usuario')

exports.Usuarios = (req, res) =>{
    Usuario.find({},(err, docs) => {
        res.send({
            docs
        })
    })
    
}

exports.creartUsuario = (req, res) =>{
    const data = {
        nombre: req.body.nombre,
        mail: req.body.mail,
        contrasena: req.body.contrasena,
    }
    
    console.log(data)
    Usuario.create( data, (err, docs) => {
        console.log(data);
        if (err) {
            res.send({ 
                status: 'error '+ err,
                code: 500,
                message: err
            })
        } else {
            res.send({docs})
        }
    });
}

exports.buscarUsuario = (req, res) =>{
    console.log(req.body.mail)
    Usuario.findOne( {mail: req.body.mail}, (err, docs) => {
        if (err) {
            res.send({ 
                status: 'error '+ err,
                code: 500,
                message: err
            })
        } else {
            res.send({docs})
        }
    });
}

exports.actualizarUsuario = (req, res) =>{
    const id = req.params
    const body = req.body
    console.log(body);
    console.log(id);
    Usuario.updateOne( 
        
        {_id: id},body,
        (err, docs)=>{
            if (err) {
                res.send({ 
                    status: 'error',
                    code: 500,
                    message: err
                })
                console.log(err)
            } else {
               res.send({
                    docs
                }) 
            }
        }
    )
}

exports.eliminarUsuario = (req, res) =>{
    const id = req.params
    Usuario.deleteOne( 
        {_id: id},
        (err, docs)=>{
            if (err) {
                res.send({ 
                    status: 'error',
                    code: 500,
                    message: err
                })
                console.log(err)
            } else {
               res.send({
                    items: docs
                })
            }
        }
    )
    
}
