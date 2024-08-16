const request = require('supertest');
const app = require('../app');

describe('Strava Routes', () => {
  it('should return activities for authenticated user', async () => {
    const token = 'fake-jwt-token'; // Use a real token or mock one
    const res = await request(app)
      .get('/strava/activities')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});