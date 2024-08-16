const express = require('express');
const { createTrainingPlan } = require('../controllers/trainingPlanController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTrainingPlan);

module.exports = router;