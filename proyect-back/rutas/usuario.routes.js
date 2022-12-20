const express = require('express')
const usuarioControlador = require('../controlador/usuario')
const router = express.Router()
const path = 'usuario'

router.get(
      `/${path}`,
      usuarioControlador.Usuarios
)

router.post(
      `/${path}`,
      usuarioControlador.creartUsuario
)

router.post(
      `/${path}/busqueda`,
      usuarioControlador.buscarUsuario
)

router.put(
      `/${path}/:id`,
      usuarioControlador.actualizarUsuario
)

router.delete(
      `/${path}/:id`,
      usuarioControlador.eliminarUsuario
)

module.exports = router