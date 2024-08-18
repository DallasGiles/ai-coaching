const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const axios = require('axios');
const mongoose = require('mongoose'); // Import mongoose

jest.mock('axios'); // Mock axios

describe('Strava Routes', () => {
  let token;

  beforeAll(() => {
    token = jwt.sign(
      { userId: 'testUserId', stravaAccessToken: 'validStravaAccessToken' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    axios.get.mockResolvedValue({
      data: [{ id: 1, name: 'Morning Run' }],
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();  // Close mongoose connection
    jest.clearAllMocks();
  });

  it('should return activities for authenticated user', async () => {
    const res = await request(app)
      .get('/strava/activities')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toEqual([{ id: 1, name: 'Morning Run' }]);
  });
});