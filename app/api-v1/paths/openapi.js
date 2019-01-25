'use strict'
const path = require('path')

module.exports = function() {
  const operations = {
    tags: ['OpenApi'],
    GET,
  }

  function GET(req, res, next) {
    const file = 'swagger-ui.html'
    res.sendFile(path.join(`${__dirname}/../html/${file}`))
  }

  GET.apiDoc = {
    summary: 'apiUI',
    description: 'Returns openapi ui',
    tags: ['openApi'],
    parameters: [],
    responses: {
      200: {
        description: 'Redoc WebPage.',
        content: { 'application/json': { schema: { type: 'object' } } },
      },
      default: {
        description: 'The requested apiDoc.',
        content: { 'application/json': { schema: { type: 'object' } } },
      },
    },
  }

  return operations
}
