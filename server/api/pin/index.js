'use strict';

var express = require('express');
var controller = require('./pin.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/myPins',auth.isAuthenticated(), controller.myPins);
router.get('/', controller.index);
router.get('/:user', controller.show);
router.post('/',auth.isAuthenticated(), controller.create);
router.delete('/:id',auth.isAuthenticated(), controller.destroy);
/*router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
*/
module.exports = router;