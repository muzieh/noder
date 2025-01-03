import request from 'supertest';
import buildApp from '../../../src/app';

describe('get-task', () => {
  it('should return task', async () => {
    const app = await buildApp();
    const response = await request(app.server).get('/tasks/12');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({ task: 'task', id: 12 });
  });
});
