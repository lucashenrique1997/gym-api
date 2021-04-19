'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: 'Online' }
})

Route.post('/sessions', 'SessionController.create');
Route.put('/sessions', 'SessionController.refreshToken');

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']],
  [['users.update'], ['User']]
])).middleware(['auth:jwt', 'is:manager']);

Route.resource('clients', 'ClientController').apiOnly().validator(new Map([
  [['clients.store'], ['Client']],
  [['clients.update'], ['Client']]
])).middleware(['auth:jwt', 'is:manager']);

Route.resource('exercises', 'ExerciseController').apiOnly().validator(new Map([
  [['exercises.store'], ['Exercise']],
  [['exercises.update'], ['Exercise']]
])).middleware(['auth:jwt', 'can:gerenc_exercicios', 'audit']);

Route.resource('trainings', 'TrainingController').apiOnly()
  .middleware(['auth:jwt', 'can:gerenc_exercicios', 'audit']);

Route.resource('permissions', 'PermissionController').apiOnly().middleware('auth:jwt');
Route.resource('roles', 'RoleController').apiOnly().middleware('auth:jwt');

Route.get('/products', 'ProductController.index').middleware(['auth:jwt', 'is:manager']);
Route.post('/products', 'ProductController.store').middleware(['auth:jwt', 'is:manager']);
