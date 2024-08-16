const { check, validationResult } = require('express-validator');

const validateTrainingPlan = [
  check('age').isInt({ min: 18 }).withMessage('Age must be at least 18'),
  check('fitnessLevel').isIn(['beginner', 'intermediate', 'advanced']),
  check('goal').isIn(['marathon', 'cycling']),
  check('weeks').isInt({ min: 4, max: 52 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTrainingPlan;