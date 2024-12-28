import { getHealth } from './get-health';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export function healthController(
  fastify: FastifyInstance,
  _: FastifyPluginOptions,
  done: () => void,
) {
  fastify.route(getHealth);

  done();
}
