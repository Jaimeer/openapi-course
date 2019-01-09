'use strict'
const controller = require('./sample.controller')
const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.json(controller.get())
})
router.post('/', async (req, res) => {
  res.json(controller.create())
})

module.exports = router
