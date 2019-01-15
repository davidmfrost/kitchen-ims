'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.raw(`
      CREATE TABLE users(
          PRIMARY KEY (id),
          id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
          first_name VARCHAR(60)  NOT NULL,
          last_name  VARCHAR(60)  NOT NULL,
          email      VARCHAR(60)  NOT NULL UNIQUE,
          birth_date DATE         NOT NULL,
          created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
      `)
    // this.create('users', (table) => {
    //   table.increments()
    //   table.string('username', 80).notNullable().unique()
    //   table.string('email', 254).notNullable().unique()
    //   table.string('password', 60).notNullable()
    //   table.timestamps()
    // })
  }

  down () {
    this.raw(`
      DROP TABLE users
      `)
  }
}

module.exports = UserSchema
