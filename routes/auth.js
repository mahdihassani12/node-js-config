const express = require('express');
let router = express.Router();
let authController = require('../controllers/auth');

router.get('/login', authController.login);
router.get('/register', authController.register);

module.exports = router;