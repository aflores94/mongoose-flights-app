//jshint esversion:6

const express = require('express');
const router = express.Router();
const flightsCtlr = require('../controllers/flights');


router.get('/', flightsCtlr.index);
router.post('/', flightsCtlr.create);
router.get('/new', flightsCtlr.new);
router.get('/:id', flightsCtlr.show);

module.exports = router;
