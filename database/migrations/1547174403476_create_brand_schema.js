'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateBrandSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE brand(
          PRIMARY KEY (id),
          id          INT UNSIGNED  NOT NULL AUTO_INCREMENT,
          name        VARCHAR(200)   NOT NULL,
          description TEXT,
          created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE brand
      `)
  }
}

module.exports = CreateBrandSchema
