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

Route.get('/admin/product', 'Admin/ProductController.index')
Route.post('/admin/product', 'Admin/ProductController.store')
Route.get('/admin/product/create', 'Admin/ProductController.create')
Route.get('/admin/product/:id', 'Admin/ProductController.show')
Route.get('/admin/product/:id/edit', 'Admin/ProductController.edit')
Route.put('/admin/product/:id/edit', 'Admin/ProductController.update')
Route.delete('/admin/product/:id/delete', 'Admin/ProductController.delete')

Route.get('/admin/inventory', 'Admin/InventoryController.index')
Route.post('/admin/inventory', 'Admin/InventoryController.store')
Route.get('/admin/inventory/create', 'Admin/InventoryController.create')
Route.get('/admin/inventory/:id', 'Admin/InventoryController.show')
Route.get('/admin/inventory/:id/edit', 'Admin/InventoryController.edit')
Route.put('/admin/inventory/:id/edit', 'Admin/InventoryController.update')
Route.delete('/admin/inventory/:id/delete', 'Admin/InventoryController.delete')

Route.get('/admin/recipe', 'Admin/RecipeController.index')
Route.post('/admin/recipe', 'Admin/RecipeController.store')
Route.get('/admin/recipe/create', 'Admin/RecipeController.create')
Route.get('/admin/recipe/:id', 'Admin/RecipeController.show')
Route.get('/admin/recipe/:id/edit', 'Admin/RecipeController.edit')
Route.put('/admin/recipe/:id/edit', 'Admin/RecipeController.update')
Route.delete('/admin/recipe/:id/delete', 'Admin/RecipeController.delete')
