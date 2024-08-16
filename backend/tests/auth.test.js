const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
  it('should redirect to Strava OAuth', async () => {
    const res = await request(app).get('/auth/strava');
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toMatch(/strava\.com\/oauth\/authorize/);
  });
});