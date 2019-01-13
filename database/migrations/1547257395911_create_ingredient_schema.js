'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateIngredientSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE ingredient(
          PRIMARY KEY (ingredient_id),
          ingredient_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
          name          VARCHAR(60)  NOT NULL,
          created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE ingredient
      `)
  }
}

module.exports = CreateIngredientSchema
