const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    tipoUsuario: { type: String, enum: ['cliente', 'empleado', 'administrador'], default: 'cliente' }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
