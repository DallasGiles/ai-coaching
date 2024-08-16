const axios = require('axios');

const getUserActivities = async (accessToken) => {
  const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

module.exports = { getUserActivities };