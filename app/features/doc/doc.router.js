'use strict'
const express = require('express')
const path = require('path')
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

module.exports = router
