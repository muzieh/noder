import { createTask, getTask, getTasks } from './tasks';

export default function (fastify, opts, done) {
  fastify.route(getTask);
  fastify.route(getTasks);
  fastify.route(createTask);

  done();
}
