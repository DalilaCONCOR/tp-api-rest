const express = require('express');
const { crearUsuario, crearOficina } = require('../controllers/adminController');
const autenticar = require('../middleware/autenticar');
const verificarRol = require('../middleware/verificarRol');
const router = express.Router();

router.post('/usuarios', autenticar, verificarRol(['administrador']), crearUsuario);
router.post('/oficinas', autenticar, verificarRol(['administrador']), crearOficina);

module.exports = router;
