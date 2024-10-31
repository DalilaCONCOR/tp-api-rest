const Reclamo = require('../models/Reclamo');

// Atender reclamos
const atenderReclamo = async (req, res) => {
    const { id, estado } = req.body;
    const reclamo = await Reclamo.findByIdAndUpdate(id, { estado, usuarioFinalizo: req.user.id }, { new: true });
    res.json(reclamo);
};

// Listar reclamos asignados
const listarReclamos = async (req, res) => {
    const reclamos = await Reclamo.find({ oficina: req.user.oficina });
    res.json(reclamos);
};

module.exports = { atenderReclamo, listarReclamos };
