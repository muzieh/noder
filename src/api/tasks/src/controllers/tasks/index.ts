import { getTask } from './get-task';
import { getTasks } from './get-tasks';
import { createTask } from './create-task';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

export function tasksController(
  fastify: FastifyInstance,
  _: FastifyPluginOptions,
  done: () => void,
) {
  fastify.route(getTask);
  fastify.route(getTasks);
  fastify.route(createTask);

  done();
}
