const Usuario = require('../models/Usuario');
const Oficina = require('../models/Oficina');

// Crear usuario
const crearUsuario = async (req, res) => {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
};

// Crear oficina
const crearOficina = async (req, res) => {
    const nuevaOficina = new Oficina(req.body);
    await nuevaOficina.save();
    res.status(201).json(nuevaOficina);
};

module.exports = { crearUsuario, crearOficina };
