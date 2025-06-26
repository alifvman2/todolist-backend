'use strict'
const Database = use('Database')
const Encryption = use('Encryption')
const Hash = use('Hash')
const User = use('App/Models/User')
const TBoard = use('App/Models/TBoard')
const TList = use('App/Models/TList')
const TCard = use('App/Models/TCard')
const TItem = use('App/Models/TItem')

class TranController {
	
	async getBoard({ response, auth })
	{

		try {

		    const userId = auth.user.id

		    const data = await TBoard
		    	.where('user_id', userId)
		    	.select('*')

			return response.status(200).json({
			  	message: 'get boards successful',
			  	data: data
			})

		} catch (error) {
			return response.status(401).json({
				  message: 'Unauthorized',
				  error: error.message
			})
		}


	}

}

module.exports = TranController
