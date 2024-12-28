import { tasksController } from './tasks';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

type taskOptions = FastifyPluginOptions & { myProp: string };

export default function (
  fastify: FastifyInstance,
  options: taskOptions,
  done: () => void,
): void | Promise<void> {
  fastify.log.info('!!!!!!!!!!!!!!!!!!!');
  fastify.log.info(options);
  fastify.register(tasksController, { prefix: '/tasks' });
  done();
}
