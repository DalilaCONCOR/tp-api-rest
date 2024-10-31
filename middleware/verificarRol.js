const verificarRol = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.tipoUsuario)) {
            return res.status(403).send('Acceso denegado');
        }
        next();
    };
};

module.exports = verificarRol;
