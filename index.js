require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reclamosEstadosController = require('./controllers/reclamosEstadosController');
const autenticar = require('./middleware/autenticar');


const app = express();
const port = 3000;

// Conectar a la base de datos
conectarDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Base de datos en memoria (ejemplo)
let reclamos = [];
let idCounter = 1;

// Rutas
app.get('/estados', reclamosEstadosController.getEstados);
app.post('/estados', reclamosEstadosController.crearEstado);
app.get('/estados/:id', reclamosEstadosController.getEstadoPorId);
app.put('/estados/:id', reclamosEstadosController.actualizarEstado);
app.delete('/estados/:id', reclamosEstadosController.eliminarEstado);

// Obtener todos los reclamos
app.get('/reclamos', (req, res) => {
    res.json(reclamos);
});

// Crear un nuevo reclamo
app.post('/reclamos', (req, res) => {
    const nuevoReclamo = { id: idCounter++, ...req.body };
    reclamos.push(nuevoReclamo);
    res.status(201).json(nuevoReclamo);
});

// Obtener un reclamo por ID
app.get('/reclamos/:id', (req, res) => {
    const reclamo = reclamos.find(r => r.id === parseInt(req.params.id));
    if (!reclamo) return res.status(404).send('Reclamo no encontrado');
    res.json(reclamo);
});

// Actualizar un reclamo
app.put('/reclamos/:id', (req, res) => {
    const reclamo = reclamos.find(r => r.id === parseInt(req.params.id));
    if (!reclamo) return res.status(404).send('Reclamo no encontrado');

    Object.assign(reclamo, req.body);
    res.json(reclamo);
});

// Eliminar un reclamo
app.delete('/reclamos/:id', (req, res) => {
    const index = reclamos.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Reclamo no encontrado');

    reclamos.splice(index, 1);
    res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
