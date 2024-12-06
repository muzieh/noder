import Fastify from 'fastify';
import { getLoggerConfig } from '@oversoft/logging';

const app = Fastify({
  logger: getLoggerConfig(),
});

interface GetTaskParams {
  taskId: number;
}

app.get<{
  Params: GetTaskParams;
}>('/tasks/:taskId', {
  schema: {
    params: {
      type: 'object',
      properties: {
        taskId: { type: 'number' },
      },
      required: ['taskId'],
    },
  },
  handler: (request) => {
    const { taskId } = request.params;
    return { task: 'task', taskId };
  },
});

app.get('/', async () => {
  return { hello: 'world' };
});

try {
  await app.listen({ port: 3000 });

  app.log.info('Request received');
  app.log.warn('Request received');
  app.log.error('Request received');
  app.log.info({ a: 12, b: 'asdf' }, 'my object');
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
