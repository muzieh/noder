import Fastify from 'fastify';
import fastifyPrintRoutes from 'fastify-print-routes';
import controllers from './controllers';

export default async function buildApp(opts = {}) {
  const app = Fastify(opts);

  await app.register(fastifyPrintRoutes);
  await app.register(controllers, { myProp: 'tst' });

  return app;
}
