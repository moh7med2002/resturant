const express = require('express');
const router = express.Router();

const marketControllers = require('../controllers/market');
const marketAuth = require('../middleware/marketAuth');

// market auth functions
router.post('/login' , marketControllers.login)
router.post('/department/create',marketAuth, marketControllers.addDepartment)
router.get('/department/all',marketAuth,marketControllers.getAllDepartments)
router.post('/product/create',marketAuth,marketControllers.addProduct)

module.exports = router;