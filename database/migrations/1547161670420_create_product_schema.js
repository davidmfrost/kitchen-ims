'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateProductSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE product(
          PRIMARY KEY (id),
          id           INT UNSIGNED  NOT NULL AUTO_INCREMENT,
          name         VARCHAR(60)   NOT NULL,
          upc          INT UNSIGNED  NOT NULL,
          brand_id     INT UNSIGNED  NOT NULL,
          nutrients_id VARCHAR(60)   NOT NULL,
          description  TEXT,
          created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE product
      `)
  }
}

module.exports = CreateProductSchema
