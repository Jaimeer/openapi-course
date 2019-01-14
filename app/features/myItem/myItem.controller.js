'use strict'
const service = require('./myItem.service')

function list(req, res) {
  const items = service.list()
  return { status: true, data: items }
}

function create(req, res) {
  const data = req.body
  const item = service.create({ data })
  return { status: true, data: item }
}

function get(req, res) {
  const { id } = req.params
  const item = service.get({ id })
  return { status: true, data: item }
}

function update(req, res) {
  const { id } = req.params
  const data = req.body
  const item = service.update({ id, data })
  return { status: true, data: item }
}

function remove(req, res) {
  const { id } = req.params
  const item = service.delete({ id })
  return { status: true, data: item }
}

module.exports = {
  list,
  create,
  get,
  update,
  remove,
}
