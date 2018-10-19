'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema; 

 var actorsSchema = new Schema({
	 name: {
		 type: String,
		 required: 'Please enter the name'
	 },
	 Created_date: {
		 type: Date,
		default: Date.now
	},
	status: {
		type: [{
			 type: String,
			 enum: ['pending', 'ongoing', 'completed']
		}],
		 default:  ['pending']
	}
}, { strict: false });

 module.exports = mongoose.model('actors', actorsSchema); 