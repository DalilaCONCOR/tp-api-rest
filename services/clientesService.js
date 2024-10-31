const Reclamo = require('../models/Reclamo');

const crearReclamo = async (data) => {
    const nuevoReclamo = new Reclamo(data);
    return await nuevoReclamo.save();
};

module.exports = { crearReclamo };
