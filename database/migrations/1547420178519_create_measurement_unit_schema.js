'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateMeasurementUnitSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE measurement_unit(
          ingredient_id INT UNSIGNED NOT NULL,
          unit          VARCHAR(20)  NOT NULL,
          created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
  }

  down () {
    this.raw(`
      DROP TABLE measurement_unit
      `)
  }
}

module.exports = CreateMeasurementUnitSchema
