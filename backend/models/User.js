const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  stravaId: { type: String, required: true, unique: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  username: String,
  profilePicture: String,
  trainingPlans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TrainingPlan',
  }],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;