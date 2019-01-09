'use strict'
const express = require('express')
const docRoutes = require('../features/doc/doc.router')
const sampleRoutes = require('../features/sample/sample.router')

const router = express.Router()

router.use('/samples', sampleRoutes)
router.use('/doc', docRoutes)

router.get('/', (req, res) => {
  res.json({ api: 'OpenApi Curse' })
})

module.exports = router
