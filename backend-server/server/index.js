const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users.routes'));

// Iniciando el servidor
app.listen(app.get('port'), () => console.log(`Servidor en el puerto: ${app.get('port')}`));