'use strict'

class RecipeController {
  index({view}) {
    return view.render('admin/recipe/all')
  }

  store({request, response}) {
    const post = request.post()
    Database.raw(`
      INSERT INTO product (upc, name, description)
      VALUES (${post.upc}, ${post.name}, ${post.description})
      `).then(response => console.log(response) )
    return 'Recipe Added'
  }

  create({view}) {
    return view.render('admin/recipe/create')
  }

  show({view}) {
    return view.render('admin/recipe/show')
  }

  edit({view}) {
    return view.render('admin/recipe/edit')
  }

  update () {

  }

  delete() {

  }
}

module.exports = RecipeController
