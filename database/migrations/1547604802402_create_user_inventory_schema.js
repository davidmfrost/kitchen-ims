'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateUserInventorySchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE user_inventory(
          user_id      INT UNSIGNED NOT NULL,
                       FOREIGN KEY  (user_id)
                       REFERENCES   user(id),
          inventory_id INT UNSIGNED NOT NULL,
                       FOREIGN KEY  (inventory_id)
                       REFERENCES   inventory(id),
          created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE user_inventory
      `)
  }
}

module.exports = CreateUserInventorySchema
