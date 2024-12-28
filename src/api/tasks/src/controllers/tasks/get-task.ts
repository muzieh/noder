import { FastifyReply, FastifyRequest } from 'fastify';

interface Params {
  taskId: number;
}

export const getTask = {
  method: 'GET',
  url: '/:taskId',
  schema: {
    params: {
      type: 'object',
      properties: {
        taskId: { type: 'integer' },
      },
    },
  },
  handler: (
    request: FastifyRequest<{ Params: Params }>,
    response: FastifyReply,
  ) => {
    const { taskId } = request.params;
    return response.send({ task: 'task', taskId }).status(200);
  },
};
