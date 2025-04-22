const Redis = require('ioredis');

const redis = new Redis({
  host: 'redis',
  port: 6379
});

async function procesarEventos() {
  console.log('Esperando eventos de Redis Stream...');

  let lastId = '0'; // desde el principio

  while (true) {
    const result = await redis.xread('BLOCK', 0, 'STREAMS', 'eventos', lastId);
    if (result) {
      const [_, eventos] = result[0];
      for (const [id, datos] of eventos) {
        const data = {};
        for (let i = 0; i < datos.length; i += 2) {
          data[datos[i]] = datos[i + 1];
        }

        console.log(`Evento recibido: ${data.tipo} - ${data.correo}`);

        // Simula una acción, como enviar un correo
        if (data.tipo === 'usuario_registrado') {
          console.log(`➡ Enviar correo de bienvenida a ${data.correo}`);
        }

        lastId = id;
      }
    }
  }
}

procesarEventos();
