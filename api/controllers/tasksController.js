'use strict';
 var mongoose = require('mongoose');
 var Model = mongoose.model('tasks');

 exports.list = function(req, res) {
	 Model.find({}, function (err, data) {
		 if (err)
			 res.send(err);
		 res.json(data);
	 });
 };

 exports.create = function(req, res) {
	 var new_model = new Model(req.body);
	 new_model.save(function(err, data) {
		 if (err)
			 res.send(err);
		 res.json(data);
	 });
 };

 exports.read = function(req, res) {
	 Model.findById(req.params.id, function(err, data) {
		 if (err)
			 res.send(err);
		 res.json(data);
	 });
 };

 exports.update = function(req, res) {
	 Model.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, data) {
		 if (err)
			 res.send(err);
		 res.json(data);
	});
 };

 exports.delete = function(req, res) {
	 Model.remove({
		 _id: req.params.id
	 }, function(err, data) {
		 if (err)
			 res.send(err);
		 res.json({ message: 'Successfully deleted' });
	 });
 };