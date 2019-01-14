'use strict'

const item = {}

function list() {
  const items = []
  items.push(item)
  items.push(item)
  items.push(item)
  return items
}

function create({ data }) {
  return item
}

function get({ id }) {
  return item
}

function update({ id }) {
  return item
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
