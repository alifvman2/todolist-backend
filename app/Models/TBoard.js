'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TBoard extends Model {
	/**
	* Relasi: TBoard milik satu User
	*/
  	user() {
    	return this.belongsTo('App/Models/User', 'user_id', 'id')
  	}
}

module.exports = TBoard
