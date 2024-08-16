const express = require('express');
const { getActivities } = require('../controllers/stravaController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/activities', authMiddleware, getActivities);

module.exports = router;