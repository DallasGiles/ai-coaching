const express = require('express');
const { createTrainingPlan } = require('../controllers/trainingPlanController');
const authMiddleware = require('../middlewares/authMiddleware');
const validateTrainingPlan = require('../middlewares/validateTrainingPlan'); // Import validation middleware

const router = express.Router();

// Apply the validation middleware before the controller
router.post('/', authMiddleware, validateTrainingPlan, createTrainingPlan);

module.exports = router;