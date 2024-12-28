import fastify from 'fastify';
//import fastifyPrintRoutes from 'fastify-print-routes';
import controllers from './controllers';

export default function buildApp(opts = {}) {
  const app = fastify(opts);

  /*
  if (Bool(opts.printRoutes)) {
    app.register(fastifyPrintRoutes);
  }
   */

  app.register(controllers, { myProp: 'tst' });

  return app;
}
