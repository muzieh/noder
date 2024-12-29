import { FastifyReply, FastifyRequest } from 'fastify';
import { tasksSchema, Tasks } from '../../types';

export const getTask = {
  method: 'GET',
  url: '/:id',
  schema: {
    params: tasksSchema.api.get.params,
    response: {
      '200': tasksSchema.api.get.body,
    },
  },
  handler: (
    request: FastifyRequest<{ Params: Tasks.API.Get.Params }>,
    response: FastifyReply,
  ) => {
    const { id } = request.params;
    console.log(`GET /tasks/${id}`);
    return response.send({ task: 'task', id }).status(200);
  },
};
