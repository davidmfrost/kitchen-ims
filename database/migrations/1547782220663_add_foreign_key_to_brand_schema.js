'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddForeignKeyToBrandSchema extends Schema {
  up () {
    this.raw(`
      ALTER TABLE brand
        ADD manufacturer_id INT UNSIGNED NOT NULL
      `)
      this.raw(`
        ALTER TABLE brand
          ADD CONSTRAINT  manufacturer_id
          FOREIGN KEY (manufacturer_id)
          REFERENCES  manufacturer(id)
        `)
  }

  down () {
    this.table('add_foreign_key_to_brands', (table) => {
      this.raw(`
        ALTER TABLE brand
         DROP FOREIGN KEY manufacturer_id
        `)
      this.raw(`
        ALTER TABLE brand
         DROP COLUMN manufacturer_id
        `)
    })
  }
}

module.exports = AddForeignKeyToBrandSchema
