'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateInstructionSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE instruction(
          PRIMARY KEY (id),
          id          INT UNSIGNED  NOT NULL AUTO_INCREMENT,
          recipe_id   INT UNSIGNED  NOT NULL,
                      FOREIGN KEY   (recipe_id)
                      REFERENCES    recipe(id),
          step        INT UNSIGNED  NOT NULL,
          title       VARCHAR(160)  NOT NULL,
          description TEXT,
          created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE instruction
      `)
  }
}

module.exports = CreateInstructionSchema
