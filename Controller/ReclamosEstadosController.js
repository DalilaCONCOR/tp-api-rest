const {
    getAllEstados,
    addEstado,
    getEstadoById,
    updateEstado,
    deleteEstado
} = require('../services/reclamosEstadoService');

// Obtener todos los estados
const getEstados = async (req, res) => {
    try {
        const estados = await getAllEstados();
        res.json(estados);
    } catch (error) {
        res.status(500).send('Error al obtener los estados');
    }
};

// Crear un nuevo estado
const crearEstado = async (req, res) => {
    const { nombre } = req.body;
    try {
        const nuevoEstado = await addEstado(nombre);
        res.status(201).json(nuevoEstado);
    } catch (error) {
        res.status(500).send('Error al crear el estado');
    }
};

// Obtener un estado por ID
const getEstadoPorId = async (req, res) => {
    try {
        const estado = await getEstadoById(req.params.id);
        if (!estado) return res.status(404).send('Estado no encontrado');
        res.json(estado);
    } catch (error) {
        res.status(500).send('Error al obtener el estado');
    }
};

// Actualizar un estado
const actualizarEstado = async (req, res) => {
    const { nombre } = req.body;
    try {
        const estado = await updateEstado(req.params.id, nombre);
        if (!estado) return res.status(404).send('Estado no encontrado');
        res.json(estado);
    } catch (error) {
        res.status(500).send('Error al actualizar el estado');
    }
};

// Eliminar un estado
const eliminarEstado = async (req, res) => {
    try {
        const estado = await deleteEstado(req.params.id);
        if (!estado) return res.status(404).send('Estado no encontrado');
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Error al eliminar el estado');
    }
};

module.exports = {
    getEstados,
    crearEstado,
    getEstadoPorId,
    actualizarEstado,
    eliminarEstado
};
