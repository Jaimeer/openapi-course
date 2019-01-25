'use strict'
module.exports = function() {
  const operations = {
    GET,
  }

  function GET(req, res, next) {
    if (req.query.type === 'apiDoc') {
      return res.json(req.apiDoc)
    }
    res.status(200).json(req.operationDoc)
  }

  GET.apiDoc = {
    summary: 'getSchema',
    description: 'Returns the requested apiDoc',
    tags: ['openApi'],
    parameters: [
      {
        name: 'type',
        description: 'The type of apiDoc to return.',
        in: 'query',
        schema: { type: 'string', enum: ['apiDoc', 'operationDoc'] },
      },
    ],
    responses: {
      200: {
        description: 'The requested apiDoc.',
        content: { 'application/json': { schema: { type: 'array', items: { type: 'object' } } } },
      },
      400: { $ref: '#/components/responses/error' },
    },
  }

  return operations
}
