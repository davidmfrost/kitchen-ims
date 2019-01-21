'use strict'

class RecipeController {
  index({view}) {
    return view.render('admin/recipe/all')
  }

  store() {

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
