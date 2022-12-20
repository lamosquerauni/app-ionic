const  mongoose  = require('mongoose')
const Publicacion  = require('../modelos/publicacion')

exports.publicaciones = async (req, res) =>{
    Publicacion.find({},(err, docs) => {
        res.send({
            docs
        })
    })
    
}

exports.crearPublicacion = async (req, res) =>{
    const data = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        imagenUrl: req.body.imagenUrl,
    }
    
    console.log(data)
    Publicacion.create( data, (err, docs) => {
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

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.actualizarPublicacion= async (req, res) =>{
    const id = req.params
    const body = req.body
    console.log(body);
    console.log(id);
    console.log('llego donde no era');
    Publicacion.updateOne( 
        
        {_id: parseId(req.params.id)},body,
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

exports.eliminarPublicacion = async (req, res) =>{
    Publicacion.deleteOne( 
        {_id: parseId(req.params.id)},
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

exports.comentar = async (req, res)=>{
    console.log('siii 1');
    console.log(req.params.id,);
    console.log('siii 2');
    const comentarios = req.body;
    console.log('siii 3');
    const newPublic = await Publicacion.findByIdAndUpdate({_id: parseId(req.params.id)}, {$push: {comentarios}},{
        new: true
    })
   
    res.json({
        mensaje: 'datos guardados con exito',
        newPublic
    });
}
