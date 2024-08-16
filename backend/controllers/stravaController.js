const { getUserActivities } = require('../services/stravaService');

const getActivities = async (req, res) => {
  try {
    const activities = await getUserActivities(req.user.accessToken);
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getActivities };