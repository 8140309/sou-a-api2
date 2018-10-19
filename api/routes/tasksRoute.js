'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/tasksController');

	 app.route('/api/tasks')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/api/tasks/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};