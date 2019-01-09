'use strict'

const item = {
  name: 'my name',
  description: 'my name',
  type: 'type01',
  endDate: new Date(),
  percentage: 0,
  count: 0,
}

function list() {
  const items = []
  items.push(item)
  items.push(item)
  items.push(item)
  return { status: true, data: items }
}

function create() {
  return { status: true, data: item }
}

function get(id) {
  return { status: true, data: item }
}

function update(id) {
  return { status: true, data: item }
}

function remove(id) {
  return { status: true, data: { deleted: true } }
}

module.exports = {
  list,
  create,
  get,
  update,
  remove,
}
