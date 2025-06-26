'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TListSchema extends Schema {
  up () {
    this.create('t_lists', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('board_id').unsigned().references('id').inTable('t_boards')
      table.string('name', 255).notNullable()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('t_lists')
  }
}

module.exports = TListSchema
