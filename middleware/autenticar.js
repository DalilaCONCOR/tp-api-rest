// middleware/autenticar.js

const autenticar = (req, res, next) => {
    const token = req.headers['authorization'];
    // Aquí puedes implementar una lógica más compleja de verificación de token
    if (!token || token !== 'tu_token_secreto') {
        return res.status(403).send('Acceso denegado');
    }
    next();
};

module.exports = autenticar;
