var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var mySchema = Schema({
	_id:String,
	id:Number,
	img: String,
	primecost: Number,
	presentprice:Number,
	detail1:String,
	detail2:String
});

/* global db */
module.exports = mongoose.model('shop', mySchema);