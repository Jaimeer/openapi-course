'use strict'

function getItem(subItemType) {
  const item = {
    name: 'my name',
    description: 'my name',
    type: 'type01',
    endDate: new Date(),
    percentage: 0,
    count: 0,
    subItem: {},
  }
  switch (subItemType) {
    case 'labels':
      item.subItem = { label1: 'label1', label2: 'label2' }
      break
    case 'texts':
      item.subItem = { text1: 'text1', text2: 'text2' }
      break
  }
  return item
}

function list() {
  const items = []
  items.push(getItem('labels'))
  items.push(getItem('texts'))
  items.push(getItem('labels'))
  items.push(getItem('texts'))
  return items
}

function create({ data }) {
  return getItem('labels')
}

function get({ id }) {
  return getItem('labels')
}

function update({ id }) {
  return getItem('labels')
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
