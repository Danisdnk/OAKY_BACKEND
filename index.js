const express = require('express');
const dotenv = require('dotenv');
const { dbConnection } = require('./database/config');
dotenv.config();

//crear servidor de Express
const app = express();

//base de datos
dbConnection();
//directorio publico
app.use(express.static('public'));
//lectura y parseo de body
app.use(express.json());
//rutas
app.use('/api/auth/', require('./routes/auth'));

//escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`servidor en puerto ${process.env.PORT}`);
});