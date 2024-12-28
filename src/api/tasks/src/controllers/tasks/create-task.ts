import { FastifyRequest } from 'fastify';
import { FastifyReply } from 'fastify';

interface Body {
  taskId: number;
  task: string;
}

export const createTask = {
  method: 'POST',
  url: '/',
  handler: (request: FastifyRequest<{ Body: Body }>, reply: FastifyReply) => {
    const { taskId, task } = request.body;
    return reply.send({ task, taskId }).send(201);
  },
};

// curl -X POST -H "Content-Type: application/json" -d '{"taskId": 2, "task": "Task 1sdf"}' http://localhost:3000/tasks
