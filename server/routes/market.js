const express = require('express');
const router = express.Router();

const marketControllers = require('../controllers/market');
const marketAuth = require('../middleware/marketAuth');

// market auth functions
router.post('/login' , marketControllers.login)



module.exports = router;