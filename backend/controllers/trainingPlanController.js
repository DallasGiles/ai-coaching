const TrainingPlan = require('../models/trainingPlan');
const { generateTrainingPlan } = require('../services/openaiService');

const createTrainingPlan = async (req, res) => {
  try {
    console.log('Received request body:', req.body);  // Log the incoming request data
    const planText = await generateTrainingPlan(req.body);
    console.log('Generated training plan:', planText);  // Log the generated plan

    const newPlan = new TrainingPlan({
      userId: req.user.userId,
      planText,
    });

    await newPlan.save();
    res.json({ plan: planText });
  } catch (error) {
    console.error('Error in createTrainingPlan:', error.message);  // Log the error message
    res.status(500).json({ error: error.message });
  }
};

module.exports = createTrainingPlan;