const Reclamo = require('../models/Reclamo');

// Crear reclamo
const crearReclamo = async (req, res) => {
    const { asunto, descripcion, tipoReclamo } = req.body;
    const nuevoReclamo = new Reclamo({
        asunto,
        descripcion,
        tipoReclamo,
        cliente: req.user.id
    });
    await nuevoReclamo.save();
    res.status(201).json(nuevoReclamo);
};

// Consultar reclamos
const consultarReclamos = async (req, res) => {
    const reclamos = await Reclamo.find({ cliente: req.user.id });
    res.json(reclamos);
};

module.exports = { crearReclamo, consultarReclamos };
