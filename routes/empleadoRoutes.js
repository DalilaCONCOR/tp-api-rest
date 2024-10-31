const express = require('express');
const { atenderReclamo, listarReclamos } = require('../controllers/empleadosController');
const autenticar = require('../middleware/autenticar');
const verificarRol = require('../middleware/verificarRol');
const router = express.Router();

router.post('/atender', autenticar, verificarRol(['empleado']), atenderReclamo);
router.get('/reclamos', autenticar, listarReclamos);

module.exports = router;
