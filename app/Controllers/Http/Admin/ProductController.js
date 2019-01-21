'use strict'

class ProductController {
  index({view}) {
    return view.render('admin/product/all')
  }

  store() {

  }

  create({view}) {
    return view.render('admin/product/create')
  }

  show({view}) {
    return view.render('admin/product/show')
  }

  edit({view}) {
    return view.render('admin/product/edit')
  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductController
