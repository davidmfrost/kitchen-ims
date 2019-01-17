'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddForeignKeyToRecipeInstructionSchema extends Schema {
  up () {
    this.raw(`
      ALTER TABLE recipe_instruction
        ADD CONSTRAINT  instruction_id
            FOREIGN KEY (instruction_id)
            REFERENCES  instruction(id)
      `)
  }

  down () {
    this.raw(`
      ALTER TABLE recipe_instruction
       DROP FOREIGN KEY instruction_id
      `)
  }
}

module.exports = AddForeignKeyToRecipeInstructionSchema
