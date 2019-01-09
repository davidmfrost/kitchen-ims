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

Route.get('/', 'PageController.index')

Route.get('/admin/inventory', 'Admin/InventoryController.index')
Route.post('/admin/inventory', 'Admin/InventoryController.store')
Route.get('/admin/inventory/create', 'Admin/InventoryController.create')
Route.get('/admin/inventory/:id', 'Admin/InventoryController.show')
Route.get('/admin/inventory/:id/edit', 'Admin/InventoryController.edit')
Route.put('/admin/inventory/:id/edit', 'Admin/InventoryController.update')
Route.delete('/admin/inventory/:id/delete', 'Admin/InventoryController.delete')
