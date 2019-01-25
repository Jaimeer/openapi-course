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
        description: 'A list of myItems.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { description: 'MyItem Id', type: 'string' },
                  code: { description: 'MyItem code', type: 'string' },
                },
              },
            },
          },
        },
      },
      default: {
        description: 'An error occurred',
        content: { 'application/json': { schema: { type: 'object' } } },
      },
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
