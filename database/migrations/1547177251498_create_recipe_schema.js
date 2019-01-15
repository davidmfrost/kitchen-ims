'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRecipeSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE recipe(
          PRIMARY KEY (id),
          id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
          name          VARCHAR(60)  NOT NULL,
          prep_time     INT UNSIGNED NOT NULL,
          cook_time     INT UNSIGNED NOT NULL,
          ingredient_id INT UNSIGNED NOT NULL,
          created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE recipe
      `)
  }
}

module.exports = CreateRecipeSchema
