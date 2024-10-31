const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async ({ correo, contraseña }) => {
    const usuario = await Usuario.findOne({ correo });
    if (!usuario || !await bcrypt.compare(contraseña, usuario.contraseña)) {
        throw new Error('Credenciales inválidas');
    }
    const token = jwt.sign({ id: usuario._id }, process.env.TOKEN_SECRETO, { expiresIn: '1h' });
    return token;
};

exports.register = async ({ nombre, apellido, correo, contraseña }) => {
    const hash = await bcrypt.hash(contraseña, 10);
    const nuevoUsuario = new Usuario({ nombre, apellido, correo, contraseña: hash });
    return await nuevoUsuario.save();
};
