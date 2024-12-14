export const createTask = {
  method: 'POST',
  url: '/',
  handler: (request, reply) => {
    const { taskId, task } = request.body;
    return { task, taskId };
  },
};
