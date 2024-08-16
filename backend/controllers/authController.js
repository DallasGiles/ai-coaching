const axios = require('axios');
const jwt = require('jsonwebtoken');

const loginWithStrava = (req, res) => {
  const authUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.STRAVA_REDIRECT_URI}&scope=read,activity:read`;
  res.redirect(authUrl);
};

const stravaCallback = async (req, res) => {
  const code = req.query.code;

  const response = await axios.post('https://www.strava.com/oauth/token', {
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    code: code,
    grant_type: 'authorization_code',
  });

  const token = jwt.sign({ userId: response.data.athlete.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token, athlete: response.data.athlete });
};

module.exports = { loginWithStrava, stravaCallback };