'use strict'

module.exports = function(myItemService) {
  const operations = {
    parameters: [
      {
        name: 'myItemId',
        in: 'path',
        required: true,
        description: 'myId',
        schema: { type: 'string' },
      },
    ],
    GET,
    PUT,
  }

  function GET(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('GET myItem')
    const myItemId = req.params.myItemId
    res.status(200).json(myItemService.get({ id: myItemId }))
  }

  GET.apiDoc = {
    summary: 'getMyItem',
    description: 'Returns myItems.',
    tags: ['myItems'],
    parameters: [],
    responses: {
      200: {
        description: 'Get myItems',
        content: { 'application/json': { schema: { $ref: '#/components/schemas/myItemSchema' } } },
      },
      400: { $ref: '#/components/responses/error' },
    },
  }

  function PUT(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('PUT myItem')
    const myItemId = req.params.myItemId
    res.status(200).json(myItemService.update({ id: myItemId }))
  }

  PUT.apiDoc = {
    summary: 'updateMyItem',
    description: 'Returns myItems.',
    tags: ['myItems'],
    parameters: [],
    responses: {
      200: {
        description: 'update myItem',
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
