'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TItemSchema extends Schema {
  up () {
    this.create('t_items', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('board_id').unsigned().references('id').inTable('t_boards')
      table.integer('list_id').unsigned().references('id').inTable('t_lists')
      table.integer('card_id').unsigned().references('id').inTable('t_cards')
      table.string('name', 255).notNullable()
      table.boolean('checklist').defaultTo(false)
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('t_items')
  }
}

module.exports = TItemSchema
