'use strict'
const controller = require('./myItem.controller')
const express = require('express')

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
