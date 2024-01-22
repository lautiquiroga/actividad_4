// Importar express
const express = require('express');
const app = express();
app.use(express.json());

// Importaciones
// Importamos el Router de Libros
const librosRouter = require('./routes/libros');
// Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

// Usar lo que importamos
app.use('/libros', librosRouter);
app.use(errorHandler);

// Ejecutar servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});