'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddForeignKeyToProductSchema extends Schema {
  up () {
    this.table('add_foreign_key_to_products', (table) => {
      this.raw(`
        ALTER TABLE product
          ADD CONSTRAINT  brand_id
              FOREIGN KEY (brand_id)
              REFERENCES  brand(id)
        `)
    })
  }

  down () {
    this.table('add_foreign_key_to_products', (table) => {
      this.raw(`
        ALTER TABLE product
         DROP FOREIGN KEY brand_id
        `)
    })
  }
}

module.exports = AddForeignKeyToProductSchema
