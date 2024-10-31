const express = require('express');
const router = express.Router();
const reclamosController = require('../controllers/reclamosController');

// Rutas para los reclamos
router.post('/', reclamosController.crearReclamo); // Crear un reclamo
router.get('/:id', reclamosController.consultarReclamo); // Consultar un reclamo por ID
router.get('/', reclamosController.listarReclamos); // Listar todos los reclamos
router.put('/:id', reclamosController.actualizarReclamo); // Actualizar un reclamo
router.delete('/:id', reclamosController.eliminarReclamo); // Eliminar un reclamo

module.exports = router;
