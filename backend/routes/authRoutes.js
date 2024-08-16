const express = require('express');
const { loginWithStrava, stravaCallback } = require('../controllers/authController');
const router = express.Router();

router.get('/strava', loginWithStrava);
router.get('/strava/callback', stravaCallback);

module.exports = router;