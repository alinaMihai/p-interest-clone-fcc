'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
  var ObjectIdSchema = Schema.ObjectId;
    var ObjectId = mongoose.Types.ObjectId;

var PinSchema = new Schema({
  title: String,
  user: {type: ObjectIdSchema,ref:'User'},
  imageUrl: String
});

module.exports = mongoose.model('Pin', PinSchema);