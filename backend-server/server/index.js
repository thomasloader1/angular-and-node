const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Routes
app.use('/api/users', require('./routes/users.routes'));

// Iniciando el servidor
app.listen(app.get('port'), () => console.log(`Servidor en el puerto: ${app.get('port')}`));