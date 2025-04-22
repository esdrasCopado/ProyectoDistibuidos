const express = require('express');
const Redis = require('ioredis');
const app = express();
const redis = new Redis({
  host: 'redis',
  port: 6379
});

app.use(express.json());

app.post('/registro', async (req, res) => {
  const { nombre, correo } = req.body;

  // Aquí podrías guardar en una BD (omitiendo para PoC)
  console.log(`Usuario registrado: ${nombre} (${correo})`);

  // Emitir evento a Redis Stream
  await redis.xadd('eventos', '*', 'tipo', 'usuario_registrado', 'correo', correo);

  res.json({ mensaje: 'Usuario registrado y evento emitido' });
});

app.listen(3001, () => {
  console.log('Servicio Registro de Usuario en puerto 3001');
});
