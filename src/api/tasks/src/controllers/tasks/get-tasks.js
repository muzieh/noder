import fastify from 'fastify';

export const getTasks = {
  method: 'GET',
  url: '/',
  handler: (request, reply) => {
    return [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ];
  },
};
