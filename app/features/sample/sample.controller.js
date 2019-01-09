'use strict'
function get() {
  return { method: 'GET' }
}

function create() {
  return { method: 'POST' }
}

module.exports = {
  get,
  create,
}
