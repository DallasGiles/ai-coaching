const axios = require('axios');

const getUserActivities = async (accessToken) => {
  try {
    console.log('Strava Service: Fetching activities with access token:', accessToken);

    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('Strava Service: Received response from Strava:', response.data);

    return response.data;
  } catch (error) {
    console.error('Strava Service: Error fetching activities:', error.message);
    throw new Error('Failed to fetch activities from Strava');
  }
};

module.exports = { getUserActivities };