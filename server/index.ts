import { createServer } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const server = await createServer({
  configFile: fileURLToPath(new URL('../vite.config.ts', import.meta.url)),
  root: fileURLToPath(new URL('../client', import.meta.url)),
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
});

await server.listen();
console.log('Development server running on http://0.0.0.0:5000');