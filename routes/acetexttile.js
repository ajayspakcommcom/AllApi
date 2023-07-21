const express = require('express');
const router = express.Router();

const controller = require('../controller/acetexttile');
router.post('/acetexttile', controller.addContactForm);
module.exports = router;


/**
 *  get doctor list
 *  get doctor profile
 *  save medicine report
 * 
 */