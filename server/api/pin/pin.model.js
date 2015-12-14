'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PinSchema = new Schema({
  title: String,
  user: String,
  imageUrl: String
});

module.exports = mongoose.model('Pin', PinSchema);