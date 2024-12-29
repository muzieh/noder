import fastify from 'fastify';
import controllers from './controllers';

export default async function buildApp(opts = {}) {
  const app = fastify(opts);
  await app.register(controllers);
  await app.ready();

  return app;
}
