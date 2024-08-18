const { getUserActivities } = require('../services/stravaService');

const getStravaActivities = async (req, res) => {
  try {
    console.log('Strava Controller: Received request from user:', req.user);

    // Extract the accessToken from the user object
    const activities = await getUserActivities(req.user.stravaAccessToken);
    console.log('Strava Controller: Retrieved activities:', activities);

    res.json(activities);
  } catch (error) {
    console.error('Strava Controller: Error occurred:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getStravaActivities };