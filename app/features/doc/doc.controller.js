'use strict'
const swaggerJSDoc = require('swagger-jsdoc')
const packageJson = require('../../../package.json')

function getDefinition() {
  const swaggerDefinition = {
    openapi: '3.0.2',
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
  }

  const docOptions = {
    swaggerDefinition,
    apis: [
      './app/features/doc/definitions/*.definition.yml',
      './app/features/*/*.definition.yml',
      './app/features/*/*.router.js',
    ],
  }
  const swaggerSpec = swaggerJSDoc(docOptions)
  return swaggerSpec
}

module.exports = {
  getDefinition,
}
