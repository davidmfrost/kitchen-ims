'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateInventorySchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE inventory(
          PRIMARY KEY (id),
          id           INT UNSIGNED NOT NULL AUTO_INCREMENT,
          quantity     INT UNSIGNED NOT NULL,
          created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE inventory
      `)
  }
}

module.exports = CreateInventorySchema
