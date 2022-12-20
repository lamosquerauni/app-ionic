const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/turismo",{
    keepAlive: true,
    useNewUrlParser: true,
    useunifiedtopology: true,
    
})
.then(db => console.log('BD conexion exitosa'))
.then(error => console.log(error))