const express = require('express')
const publicacionControlador = require('../controlador/publicacion')
const router = express.Router()
const path = 'publicacion'

router.get(
      `/${path}`,
      publicacionControlador.publicaciones
)

router.post(
      `/${path}`,
      publicacionControlador.crearPublicacion
)

router.put(
      `/${path}/:id`,
      publicacionControlador.actualizarPublicacion
)

router.delete(
      `/${path}/:id`,
      publicacionControlador.eliminarPublicacion
)

router.put(
      `/${path}/comentario/:id`,
      publicacionControlador.comentar
)
module.exports = router