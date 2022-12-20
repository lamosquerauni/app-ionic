const express = require('express')
const iniDB = require('./conexionBD')
const app = express()
const port =3001
const usuario = require('./rutas/usuario.routes')
const publicacion = require('./rutas/publicacion.routes')
const cors = require('cors')
 



app.use(express.json({}))
app.use(cors())
app.listen(port, ()=>{
    console.log('la app esta en linea ')
})
app.use(usuario)
app.use(publicacion)
/* app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)  */