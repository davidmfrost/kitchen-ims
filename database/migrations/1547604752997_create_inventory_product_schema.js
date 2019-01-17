'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateInventoryProductSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE inventory_product(
          inventory_id INT UNSIGNED NOT NULL,
                       FOREIGN KEY  (inventory_id)
                       REFERENCES   inventory(id),
          product_id   INT UNSIGNED NOT NULL,
                       FOREIGN KEY  (product_id)
                       REFERENCES   product(id),
          created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE inventory_product
      `)
  }
}

module.exports = CreateInventoryProductSchema
