const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const conectarDB = async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos conectada exitosamente (en memoria)');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
};

module.exports = conectarDB;
