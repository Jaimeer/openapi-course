'use strict'
const swaggerJSDoc = require('swagger-jsdoc')
const packageJson = require('../../../package.json')

async function getDefinition() {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: packageJson.description,
      version: packageJson.version,
    },
    servers: [{ url: '/' }],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'authorization',
          description: 'API JWT Token',
        },
      },
    },
  }

  const docOptions = {
    swaggerDefinition,
    apis: [
      './app/features/doc/definitions/*.yml',
      './app/features/*/*.definition.yml',
      './app/features/*/*.route.js',
    ],
  }
  const swaggerSpec = swaggerJSDoc(docOptions)
  return swaggerSpec
}

module.exports = {
  getDefinition,
}
