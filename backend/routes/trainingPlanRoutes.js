const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const validateTrainingPlan = require('../middlewares/validateTrainingPlan');
const createTrainingPlan = require('../controllers/trainingPlanController');

const router = express.Router();

// Apply the validation middleware before the controller
router.post('/', authMiddleware, validateTrainingPlan, createTrainingPlan);

module.exports = router;