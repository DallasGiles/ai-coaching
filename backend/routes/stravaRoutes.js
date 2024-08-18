const express = require('express');
const { getStravaActivities } = require('../controllers/stravaController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/activities', authMiddleware, getStravaActivities);

module.exports = router;