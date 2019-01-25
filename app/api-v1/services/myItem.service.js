'use strict'
const { clone } = require('lodash')

const ITEM = {
  id: 'XXXX',
  code: 'myCode',
}

function list() {
  const items = []
  items.push(ITEM)
  items.push(ITEM)
  items.push(ITEM)
  return items
}

function create({ id }) {
  return ITEM
}

function get({ id }) {
  const item = clone(ITEM)
  item.id = id
  return item
}

function update({ id }) {
  return ITEM
}

function remove({ id }) {
  return { deleted: true }
}

module.exports = {
  list,
  create,
  get,
  update,
  remove,
}
