'use strict'
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ type: 'GET' })
})
router.post('/', (req, res) => {
  res.json({ type: 'POST' })
})

module.exports = router
