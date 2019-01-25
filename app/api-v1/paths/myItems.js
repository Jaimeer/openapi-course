'use strict'

module.exports = function(myItemService) {
  const operations = {
    GET,
    POST,
  }

  function GET(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('GET myItem')
    res.status(200).json(myItemService.list())
  }

  GET.apiDoc = {
    summary: 'getMyItems',
    description: 'Returns myItems.',
    tags: ['myItems'],
    parameters: [],
    responses: {
      200: {
        description: 'A list of myItems.',
        content: {
          'application/json': {
            schema: { type: 'array', items: { $ref: '#/components/schemas/myItemSchema' } },
          },
        },
      },
      400: { $ref: '#/components/responses/error' },
    },
  }

  function POST(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('POST myItem')
    res.status(200).json(myItemService.create())
  }

  POST.apiDoc = {
    summary: 'createMyItems',
    description: 'Create new myItem.',
    tags: ['myItems'],
    parameters: [],
    requestBody: {
      content: { 'application/json': { schema: { $ref: '#/components/schemas/myItemSchema' } } },
    },
    responses: {
      200: {
        description: 'New myItems.',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/myItemSchema' } } },
      },
      400: { $ref: '#/components/responses/error' },
    },
  }

  return operations
}

/*
const router = express.Router()

router.get('/', (req, res) => {
  res.json(controller.list(req, res))
})

router.post('/', (req, res) => {
  res.json(controller.create(req, res))
})

router.get('/:id', (req, res) => {
  res.json(controller.get(req, res))
})

router.put('/:id', (req, res) => {
  res.json(controller.update(req, res))
})

router.delete('/:id', (req, res) => {
  res.json(controller.remove(req, res))
})

module.exports = router
*/
