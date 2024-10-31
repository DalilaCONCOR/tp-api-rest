const express = require('express');
const { crearReclamo, consultarReclamos } = require('../controllers/clientesController');
const autenticar = require('../middleware/autenticar');
const router = express.Router();

router.post('/reclamos', autenticar, crearReclamo);
router.get('/reclamos', autenticar, consultarReclamos);

module.exports = router;
