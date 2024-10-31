const {
    obtenerEstados,
    crearEstado,
    obtenerEstadoPorId,
    actualizarEstado,
    eliminarEstado
} = require('../db/reclamosEstados');

// Obtener todos los estados
const getAllEstados = async () => {
    return await obtenerEstados();
};

// Crear un nuevo estado
const addEstado = async (nombre) => {
    return await crearEstado(nombre);
};

// Obtener un estado por ID
const getEstadoById = async (id) => {
    return await obtenerEstadoPorId(id);
};

// Actualizar un estado
const updateEstado = async (id, nombre) => {
    return await actualizarEstado(id, nombre);
};

// Eliminar un estado
const deleteEstado = async (id) => {
    return await eliminarEstado(id);
};

module.exports = {
    getAllEstados,
    addEstado,
    getEstadoById,
    updateEstado,
    deleteEstado
};
