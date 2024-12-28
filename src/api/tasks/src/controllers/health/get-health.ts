import { FastifyReply, FastifyRequest } from 'fastify';

interface GetHealthParams {
  id: string;
}

export const getHealth = {
  method: 'GET',
  url: '/:id',
  schema: {
    querystring: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  },
  handler: async (
    request: FastifyRequest<{ Params: GetHealthParams }>,
    reply: FastifyReply,
  ) => {
    return reply.send({ status: 'ok', id: request.params.id }).status(200);
  },
};
