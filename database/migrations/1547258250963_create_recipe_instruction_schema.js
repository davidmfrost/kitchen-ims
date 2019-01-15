'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRecipeInstructionSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE recipe_instruction(
          recipe_id      INT UNSIGNED NOT NULL,
                         FOREIGN KEY (recipe_id)
                         REFERENCES  recipe(id),

          instruction_id INT UNSIGNED NOT NULL,
          created_at     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.drop('recipe_instruction')
  }
}

module.exports = CreateRecipeInstructionSchema
