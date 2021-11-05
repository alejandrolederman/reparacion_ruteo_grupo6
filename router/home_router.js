const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_Ctrl.js');

router.get('/', homeController.home);


module.exports = router;