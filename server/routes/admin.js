const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin');
const adminAuth = require('../middleware/adminAuth');

// admin auth functions
router.post('/register' , adminControllers.register);
router.post('/login' , adminControllers.login)


// admin market function
router.post('/market/create' , adminAuth , adminControllers.addMarket);
router.get('/market/all' , adminAuth , adminControllers.getAllMarket);


module.exports = router;