const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin');
const adminAuth = require('../middleware/adminAuth');


module.exports = router;