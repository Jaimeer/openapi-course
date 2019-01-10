'use strict'
const express = require('express')
const path = require('path')
const swaggerUi = require('swagger-ui-express')
const DocController = require('./doc.controller')

const router = express.Router()

const swaggerSpecs = DocController.getDefinition()

router.get('/api.json', (req, res) => {
  res.json(swaggerSpecs)
})

router.get('/api-ui', (req, res) => {
  const file = 'swagger-ui.html'
  res.sendFile(path.join(`${__dirname}/html/${file}`))
})

const uiOptions = {
  customCss: '.swagger-ui .topbar { display: none }  .wrapper { word-break: break-all }',
}
router.use('/api-ui-2', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, uiOptions))

module.exports = router
