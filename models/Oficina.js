const mongoose = require('mongoose');

const oficinaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    empleados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }]
});

module.exports = mongoose.model('Oficina', oficinaSchema);
