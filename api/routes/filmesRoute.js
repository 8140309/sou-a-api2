'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/filmesController');

	 app.route('/filmes')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/filmes/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};