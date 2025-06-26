'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TItem extends Model {
	/**
	* Relasi: TItem milik satu User
	*/
  	user() {
    	return this.belongsTo('App/Models/User', 'user_id', 'id')
  	}
	/**
	* Relasi: TItem memiliki satu TBoard
	*/
  	board() {
    	return this.belongsTo('App/Models/TBoard', 'board_id', 'id')
  	}
	/**
	* Relasi: TItem memiliki satu TList
	*/
  	list() {
    	return this.belongsTo('App/Models/TList', 'list_id', 'id')
  	}
	/**
	* Relasi: TItem memiliki satu TCard
	*/
  	card() {
    	return this.belongsTo('App/Models/TCard', 'card_id', 'id')
  	}
}

module.exports = TItem
