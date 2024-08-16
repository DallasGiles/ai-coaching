const { generateTrainingPlan } = require('../services/openaiService');

const createTrainingPlan = async (req, res) => {
  try {
    const plan = await generateTrainingPlan(req.body);
    res.json({ plan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTrainingPlan };