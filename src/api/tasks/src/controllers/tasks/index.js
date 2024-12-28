import { getTask } from './get-task';
import { getTasks } from './get-tasks';
import { createTask } from './create-task';

export function tasksController(fastify, opts, done) {
  fastify.route(getTask);
  fastify.route(getTasks);
  fastify.route(createTask);

  done();
}
