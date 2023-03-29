const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin');
const adminAuth = require('../middleware/adminAuth');

// admin auth functions
router.post('/register' , adminControllers.register);
router.post('/login' , adminControllers.login)

module.exports = router;