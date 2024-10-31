const Reclamo = require('../models/Reclamo');

const atenderReclamo = async (id, estado, usuarioFinalizo) => {
    return await Reclamo.findByIdAndUpdate(id, { estado, usuarioFinalizo }, { new: true });
};

module.exports = { atenderReclamo };
