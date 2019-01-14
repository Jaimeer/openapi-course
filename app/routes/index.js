'use strict'
const express = require('express')
const docRoutes = require('../features/doc/doc.router')
const sampleRoutes = require('../features/sample/sample.router')
const myItemRoutes = require('../features/myItem/myItem.router')

const router = express.Router()

router.use('/samples', sampleRoutes)
router.use('/myItem', myItemRoutes)
router.use('/doc', docRoutes)

router.get('/', (req, res) => {
  res.json({ api: 'OpenApi Curse' })
})

module.exports = router
