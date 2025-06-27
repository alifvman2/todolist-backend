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

		    const data = await TBoard.query().where('user_id', userId).fetch()

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

	async getList({ response, auth, request })
	{

		const id = request.input('id')

		try {

		    const userId = auth.user.id
		    const boardId = id

		    const data = await TList
		    	.query()
		    	.where('user_id', userId)
		    	.where('board_id', boardId)
		    	.fetch()

			const lists = data.toJSON()

			for (const item of lists) {

				const card = await TCard
					.query()
					.where('list_id', item.id)
					.fetch()

				item.cards = card.toJSON() ?? null

			}

			return response.status(200).json({
			  	message: 'get Lists successful',
			  	data: lists
			})

		} catch (error) {
			return response.status(401).json({
				  message: 'Unauthorized',
				  error: error.message
			})
		}

	}

	async storeList({ response, auth, request })
	{

		const { id, name } = request.only(['id', 'name'])

		try {

		    const user = auth.user

		    const list = await TList.create({
		      board_id: id,       // id board dari frontend
		      user_id: user.id,   // user login saat ini
		      name: name
		    })

		    return response.status(201).json({
		      message: 'List created successfully',
		      data: list
		    })

		} catch (error) {
			return response.status(401).json({
				  message: 'Error',
				  error: error.message
			})
		}

	}

}

module.exports = TranController
