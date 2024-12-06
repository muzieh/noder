import Fastify from 'fastify';
import { getLoggerConfig } from '@oversoft/logging';

const fastify = Fastify({
  logger: getLoggerConfig(),
});

fastify.route({
  method: 'GET',
  url: '/tasks/:taskId',
  handler: (request, reply) => {
    const { taskId } = request.params;
    return { task: 'task', taskId };
  },
});

fastify.get('/', async (req, res) => {
  return { hello: 'world' };
});

try {
  await fastify.listen({ port: 3000 });

  fastify.log.info('Request received');
  fastify.log.warn('Request received');
  fastify.log.error('Request received');
  fastify.log.info({ a: 12, b: 'asdf' }, 'my object');
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
