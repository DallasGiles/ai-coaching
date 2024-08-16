const mongoose = require('mongoose');

const trainingPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  planText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const TrainingPlan = mongoose.model('TrainingPlan', trainingPlanSchema);

module.exports = TrainingPlan;