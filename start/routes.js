'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
	Route.post('registration', 'loginController.registration')
	Route.post('login', 'loginController.login')
	Route.get('dataUser', 'loginController.dataUser')
	Route.post('logout', 'loginController.logout').middleware('auth')
}).prefix('auth').namespace('Auth')

Route.group(() => {
	Route.get('getBoard', 'TranController.getBoard')
	Route.get('getList', 'TranController.getList')
	Route.post('storeList', 'TranController.storeList')
}).prefix('trans').middleware('auth')
