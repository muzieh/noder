import { tasksController } from './tasks';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

type taskOptions = FastifyPluginOptions & { myProp: string };

export default function (
  fastify: FastifyInstance,
  options: taskOptions,
  done: () => void,
): void | Promise<void> {
  fastify.register(tasksController, { ...options, prefix: '/tasks' });

  done();
}
