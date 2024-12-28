import Fastify from 'fastify';
import { getLoggerConfig } from '@oversoft/logging';
import fastifyPrintRoutes from 'fastify-print-routes';
import tasksController from './controllers';

const app = Fastify({
  logger: getLoggerConfig(),
});

interface GetTaskParams {
  taskId: number;
}

await app.register(fastifyPrintRoutes);
await app.register(tasksController, { myProp: 'tst' });

app.get<{
  Params: GetTaskParams;
}>(
  '/tasks-main/:taskId',
  {
    schema: {
      params: {
        type: 'object',
        properties: {
          taskId: { type: 'number' },
        },
        required: ['taskId'],
      },
    },
    preValidation: (request, _, done) => {
      const { taskId } = request.params;
      request.log.info('preValidation');
      done(
        taskId <= 0 ? new Error('Task ID must be greater than 0') : undefined,
      );
    },
  },
  async (request) => {
    const { taskId } = request.params;
    return { task: 'task', taskId };
  },
);

app.get(
  '/',
  {
    schema: {},
  },
  async () => {
    return { hello: 'world' };
  },
);

const getHealthRoute = {
  method: 'GET',
  url: '/health/:id',
  schema: {
    querystring: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  },
  // @ts-expect-error
  handler: async (req) => {
    return { status: 'ok', id: req.query.id };
  },
};

app.register(
  function (fastify, _, done) {
    fastify.route(getHealthRoute);

    done();
  },
  {
    prefix: '/api/uyh',
  },
);

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
