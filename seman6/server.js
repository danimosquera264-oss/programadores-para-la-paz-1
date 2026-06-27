const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor semana6 activo');
});

app.post('/registro', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.status(201).json({
    estado: 'ok',
    ruta: 'registro',
    datos: { nombre, mensaje },
    mensaje: `Registro recibido para ${nombre || 'anónimo'}`
  });
});

app.post('/incidencia', (req, res) => {
  const { tipo, descripcion } = req.body;
  res.status(201).json({
    estado: 'ok',
    ruta: 'incidencia',
    incidencia: { tipo, descripcion },
    recibido: true
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
