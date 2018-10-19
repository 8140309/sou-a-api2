'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/actorsController');

	 app.route('/actors')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/actors/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};