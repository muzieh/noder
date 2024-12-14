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
  handler: (request, reply) => {
    const { taskId } = request.params;
    return { task: 'task', taskId };
  },
};
