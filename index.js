const express = require('express');
const conectarDB = require('./db/conexion');
const authRoutes = require('./routes/authRoutes');
const reclamosRoutes = require('./routes/reclamosRoutes');

const app = express();
app.use(express.json());

conectarDB();

app.use('/api/auth', authRoutes);
app.use('/api/reclamos', reclamosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
