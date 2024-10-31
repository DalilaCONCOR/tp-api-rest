const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Token es requerido');

    jwt.verify(token, process.env.TOKEN_SECRETO, (err, decoded) => {
        if (err) return res.status(500).send('Token no válido');
        req.userId = decoded.id;
        next();
    });
};
