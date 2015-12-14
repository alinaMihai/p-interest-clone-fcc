/**
 * Endpoints.
 * GET     /pins                ->  index
 * POST    /pins                ->  create
 * GET     /pins/:user          ->  show
 * GET     /pins/myPins         ->  myPins
 * DELETE  /pins/:id            ->  destroy
 */

'use strict';

var _ = require('lodash');
var Pin = require('./pin.model');
var User = require('../user/user.model');

// Get list of pins
exports.index = function(req, res) {
  var query=Pin.find({});
  query.exec(function (err, pins) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pins);
  });
};

// Get all pins belonging to a user
exports.show = function(req, res) {
  var query=Pin.find({});
  query.where('user',req.params.user);

  query.exec(function (err, pins) {
    if(err) { return handleError(res, err); }
    if(!pins) { return res.status(404).send('Not Found'); }
    return res.json(pins);
  });
};

// Creates a new pin in the DB.
exports.create = function(req, res) {
  req.body.user=req.user.email;
  Pin.create(req.body, function(err, pin) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pin);
  });
};

exports.myPins=function(req,res){
  var query=Pin.find({});
  query.where('user',req.user.email);
  query.exec(function(err,pins){
    if(err) { return handleError(res, err); }
    if(!pins) { return res.status(404).send('Not Found'); }
    return res.json(pins);
  });
}

// Deletes a pin from the DB.
exports.destroy = function(req, res) {
  var query=Pin.find({});
  query.where('user',req.user.email);
  query.where('_id',req.params.id);
  query.exec(function (err, pin) {
    if(err) { return handleError(res, err); }
    if(!pin) { return res.status(404).send('Not Found'); }
    pin.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}