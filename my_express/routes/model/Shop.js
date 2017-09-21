var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	id: String,
	img: String
});

/* global db */
module.exports = mongoose.model('shop', mySchema);