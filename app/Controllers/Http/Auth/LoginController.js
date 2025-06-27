'use strict'
const Database = use('Database')
const Encryption = use('Encryption')
const Hash = use('Hash')
const User = use('App/Models/User')

class LoginController {

	async registration({ request, auth, response }) 
	{

		const { email, password } = request.only(['email', 'password'])

		const cek = await Database
			.table('users')
			.where('email', email)
			.first()

		if (cek) {
	      	return response.status(400).json({
	        	message: 'Registration failed, email already used',
	      	})
		}

	    try {
      		const user = await User.create({
			    email,
			    username: email,
			    password: password
		  	})
    		
    		const token = await auth.generate(user)

	      	return response.status(201).json({
	        	message: 'User created successfully',
	        	user,
      			token
	      	})
	    } catch (error) {
	      	return response.status(400).json({
	        	message: 'Registration failed',
	        	error: error.message
	      	})
	    }

	}

	async login({ request, auth, response }) 
	{

		const { email, password } = request.only(['email', 'password'])

		try {

	      const token = await auth.authenticator('jwt').attempt(email, password)
	      const user = await User.findBy('email', email)

			return response.status(200).json({
				message: 'Login successful',
				token,
				user: {
				  	id: user.id,
				  	email: user.email
				}
			})
		
		} catch (error) {
		  	return response.status(400).json({
			    message: 'Login failed',
			    error: 'Invalid email or password'
		  	})
		}

	}

	async logout({ auth, response }) {
		try {
			const user = await auth.getUser()

			return response.status(200).json({
			  	message: 'Logout successful',
			  	user: {
				    id: user.id,
				    email: user.email
			  	}
			})
		} catch (error) {
			return response.status(401).json({
			  	message: 'You are not logged in',
			  	error: error.message
			})
		}

  		return response.status(error.status).send(error.message)

	}

}

module.exports = LoginController
