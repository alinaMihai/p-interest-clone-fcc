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

// Get list of pins
exports.index = function(req, res) {
  Pin.find(function (err, pins) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pins);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Pin.findById(req.params.id, function (err, pin) {
    if(err) { return handleError(res, err); }
    if(!pin) { return res.status(404).send('Not Found'); }
    return res.json(pin);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  var user=req.user._id;
  req.body.user=user;
  Pin.create(req.body, function(err, pin) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pin);
  });
};