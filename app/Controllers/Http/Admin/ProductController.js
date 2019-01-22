'use strict'
const Database = use('Database')

class ProductController {
  index({view}) {
    return view.render('admin/product/all')
  }

  store({request, response}) {
    const post = request.post()
    Database.raw(`
      INSERT INTO product (upc, name, description)
      VALUES (${post.upc}, ${post.name}, ${post.description})
      `).then(response => console.log(response) )
    return 'Product Added'
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
