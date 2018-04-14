module.exports = function(app){

 var place = require('./../controllers/place.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/place/new')
	.get(place.new);
	
	app.route('/place/all')
	.get(place.all);
	
	app.route('/place/:bookId')
	.get(place.view);

	app.route('/place/edit/:bookId')
	.get(place.edit);
	
 app.route('/api/place')
	.get(place.list)
	.post(users.requiresLogin, place.create);

  app.route('/api/place/:bookId')
	.get(place.read)
  .delete(users.requiresLogin, place.delete);

	app.route('/api/place/edit/:bookId')
	.get(place.read)
	.put(users.requiresLogin, place.update);


app.param('bookId', place.bookByID);


}