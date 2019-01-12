'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRecipeInstructionSchema extends Schema {
  up () {
    this.create('create_recipe_instructions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('create_recipe_instructions')
  }
}

module.exports = CreateRecipeInstructionSchema
