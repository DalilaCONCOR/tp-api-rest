const mongoose = require('mongoose');

const reclamoSchema = new mongoose.Schema({
    asunto: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now },
    fechaFinalizacion: { type: Date },
    fechaCancelacion: { type: Date },
    estado: { type: String, required: true, default: 'creado' },
    tipoReclamo: { type: String, required: true },
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    usuarioFinalizo: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Reclamo', reclamoSchema);
