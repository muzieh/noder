import build from '../../../../src/app';

describe('app', () => {
  it('should be a function', async () => {
    const app = build();

    const response = await app.inject({
      method: 'GET',
      url: '/tasks/12',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ task: 'task', taskId: 12 });
  });
});
