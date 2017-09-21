var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	_id: String,
	img: String,
	primecost: Number,
});

/* global db */
module.exports = mongoose.model('user', mySchema);