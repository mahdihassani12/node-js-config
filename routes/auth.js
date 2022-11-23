const express = require('express');
let router = express.Router();
let authController = require('../controllers/auth');

router.get('/login', authController.login);
router.get('/register', authController.register);

router.post('/loginCheckout', authController.loginCheckout);
router.post('/registerCheckout', authController.registerCheckout);

module.exports = router;