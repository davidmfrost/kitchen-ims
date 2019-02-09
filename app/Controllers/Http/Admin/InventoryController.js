'use strict'

class InventoryController {
  index({view}) {
    return view.render('admin/inventory/all')
  }

  store({request, response}) {
    const post = request.post()
    Database.raw(`
      INSERT INTO product (upc, name, description)
      VALUES (${post.upc}, ${post.name}, ${post.description})
      `).then(response => console.log(response) )
    return 'Item Added'
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
