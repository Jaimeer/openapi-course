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
  paths: {},
}

module.exports = apiDoc
