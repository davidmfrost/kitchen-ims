'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRecipeIngredientSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE recipe_ingredient(
          PRIMARY KEY (recipe_ingredient_id),
          recipe_ingredient_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
          recipe_id            INT UNSIGNED NOT NULL,
          ingredient_id        INT UNSIGNED NOT NULL,
          created_at           TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at           TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
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
