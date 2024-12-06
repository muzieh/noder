import fastify from 'fastify';

export const route = fastify.route({
  method: 'GET',
  url: '/tasks/:taskId',
  handler: (request, reply) => {
    const { taskId } = request.params;
    return { task: 'task', taskId };
  },
});
