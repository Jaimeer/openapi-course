const packageJson = require('../../package.json')

const apiDoc = {
  openapi: '3.0.2',
  // basePath: '/v1',
  info: {
    title: packageJson.description,
    version: packageJson.version,
  },
  servers: [
    {
      url: '/',
      description: 'Development server',
    },
    {
      url: 'https://staging.my-server.com/',
      description: 'Staging server',
    },
    {
      url: 'https://api.my-server.com/',
      description: 'Production server',
    },
  ],
  components: {
    schemas: {
      myItemSchema: {
        type: 'object',
        properties: {
          id: { description: 'MyItem Id', type: 'string' },
          code: { description: 'MyItem code', type: 'string' },
        },
      },
    },
    responses: {
      error: {
        description: 'An error occurred',
        content: { 'application/json': { schema: { type: 'object' } } },
      },
    },
  },
  paths: {},
}

module.exports = apiDoc
