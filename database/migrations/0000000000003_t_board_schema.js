'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TBoardSchema extends Schema {
  up () {
    this.create('t_boards', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name', 255).notNullable()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('t_boards')
  }
}

module.exports = TBoardSchema
