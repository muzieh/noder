export const tasksSchema = {
  api: {
    get: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
        },
      },
      body: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          task: { type: 'string' },
        },
      },
    },
  },
};

export namespace Tasks {
  export namespace API {
    export namespace Get {
      export type Params = { id: number };
      export type Body = { id: number; task: string };
    }
  }
}
