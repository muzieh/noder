import { FastifyReply, FastifyRequest } from 'fastify';

export const getTasks = {
  method: 'GET',
  url: '/',
  handler: (request: FastifyRequest, reply: FastifyReply) => {
    request.log.info('GET /tasks');
    return reply.send([
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ]);
  },
};
