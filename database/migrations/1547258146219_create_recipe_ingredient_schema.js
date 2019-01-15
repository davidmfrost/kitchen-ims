'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRecipeIngredientSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE recipe_ingredient(
          recipe_id     INT UNSIGNED NOT NULL,
                        FOREIGN KEY (recipe_id)
                        REFERENCES  recipe(id),

          ingredient_id INT UNSIGNED NOT NULL,
                        FOREIGN KEY (ingredient_id)
                        REFERENCES  ingredient(id),

          created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE recipe_ingredient
      `)
  }
}

module.exports = CreateRecipeIngredientSchema
