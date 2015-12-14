/**
 * Endpoints.
 * GET     /pins                ->  index
 * POST    /pins                ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
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

// Get a single thing
exports.show = function(req, res) {
  var query=Pin.find({});
  query.where('user',req.params.user);

  query.exec(function (err, pins) {
    if(err) { return handleError(res, err); }
    if(!pins) { return res.status(404).send('Not Found'); }
    return res.json(pins);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  req.body.user=req.user.email;
  Pin.create(req.body, function(err, pin) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pin);
  });
};


function handleError(res, err) {
  return res.status(500).send(err);
}