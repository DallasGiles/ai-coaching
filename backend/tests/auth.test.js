const request = require('supertest');
const app = require('../app');

const mongoose = require('mongoose');


describe('Auth Routes', () => {
  it('should redirect to Strava OAuth', async () => {
    const res = await request(app).get('/auth/strava');
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toMatch(/strava\.com\/oauth\/authorize/);
  });
});

afterAll(async () => {
    await mongoose.connection.close();
  });