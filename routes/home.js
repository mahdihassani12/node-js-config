const express = require('express');
let router = express.Router();
let homeController = require('../controllers/home');

router.get('/', homeController.getHomePage);
router.get('/home', homeController.getHomePage);

module.exports = router;