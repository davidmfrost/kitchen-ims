'use strict'

class InventoryController {
  index({view}) {
    return view.render('admin/inventory/all')
  }

  store() {

  }

  create({view}) {
    return view.render('admin/inventory/create')
  }

  show({view}) {
    return view.render('admin/inventory/show')
  }

  edit({view}) {
    return view.render('admin/inventory/edit')
  }

  update() {

  }

  delete() {

  }
}

module.exports = InventoryController
