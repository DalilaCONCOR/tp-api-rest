import express from 'express';
import ReclamosEstadosController from '../Controller/ReclamosEstadosController.js';

// 
const router = express.Router();
const reclamosEstadosController = new ReclamosEstadosController();

// Se crea una ruta puede ser get post patch o delete
router.get('/', reclamosEstadosController.buscarTodos);

/*router.get('/idReclamoEstado', reclamosEstadosCoontroller,buscarPorId);*/

export { router } ; 
