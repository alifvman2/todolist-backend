'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TList extends Model {
	/**
	* Relasi: TList milik satu User
	*/
  	user() {
    	return this.belongsTo('App/Models/User', 'user_id', 'id')
  	}
	/**
	* Relasi: TList memiliki satu TBoard
	*/
  	board() {
    	return this.belongsTo('App/Models/TBoard', 'board_id', 'id')
  	}
}

module.exports = TList
