const express = require('express');
const dotenv = require('dotenv')
dotenv.config();

//crear servidor de Express
const app = express();
//directorio publico
app.use(express.static('public'));
//rutas
app.use('/api/auth/', require('./routes/auth'));

//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor en puerto ${process.env.PORT}`);
});