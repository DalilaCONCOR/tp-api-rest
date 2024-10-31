const authService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en la autenticación', error });
    }
};

exports.register = async (req, res) => {
    try {
        const nuevoUsuario = await authService.register(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al registrar usuario', error });
    }
};
