const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { initialize } = require('express-openapi')
const path = require('path')

const app = express()

app.use(cors())
app.use(bodyParser.json())

initialize({
  app,
  apiDoc: require('./api-v1/api-doc'),
  dependencies: {
    myItemService: require('./api-v1/services/myItem.service'),
  },
  paths: path.resolve(__dirname, 'api-v1', 'paths'),
})

app.use(function(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.log('ERROR')
  res.status(err.status).json(err)
})

module.exports = app
