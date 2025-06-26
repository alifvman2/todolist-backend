'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TCard extends Model {
	/**
	* Relasi: TCard milik satu User
	*/
  	user() {
    	return this.belongsTo('App/Models/User', 'user_id', 'id')
  	}
	/**
	* Relasi: TCard memiliki satu TBoard
	*/
  	board() {
    	return this.belongsTo('App/Models/TBoard', 'board_id', 'id')
  	}
	/**
	* Relasi: TCard memiliki satu TList
	*/
  	list() {
    	return this.belongsTo('App/Models/TList', 'list_id', 'id')
  	}
}

module.exports = TCard
