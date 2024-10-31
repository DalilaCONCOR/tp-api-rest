const Reclamo = require('../models/Reclamo');

exports.crearReclamo = async (req, res) => {
    try {
        const nuevoReclamo = new Reclamo(req.body);
        await nuevoReclamo.save();
        res.status(201).json(nuevoReclamo);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear reclamo', error });
    }
};

exports.consultarReclamo = async (req, res) => {
    try {
        const reclamo = await Reclamo.findById(req.params.id);
        if (!reclamo) return res.status(404).json({ mensaje: 'Reclamo no encontrado' });
        res.json(reclamo);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al consultar reclamo', error });
    }
};

exports.listarReclamos = async (req, res) => {
    try {
        const reclamos = await Reclamo.find();
        res.json(reclamos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al listar reclamos', error });
    }
};

exports.actualizarReclamo = async (req, res) => {
    try {
        const reclamo = await Reclamo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reclamo) return res.status(404).json({ mensaje: 'Reclamo no encontrado' });
        res.json(reclamo);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar reclamo', error });
    }
};

exports.eliminarReclamo = async (req, res) => {
    try {
        const reclamo = await Reclamo.findByIdAndDelete(req.params.id);
        if (!reclamo) return res.status(404).json({ mensaje: 'Reclamo no encontrado' });
        res.json({ mensaje: 'Reclamo eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar reclamo', error });
    }
};
