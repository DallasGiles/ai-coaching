const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

describe('Training Plan Routes', () => {
  let token;

  beforeAll(() => {
    token = jwt.sign({ userId: 'testUserId' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  });

  it('should return 400 for invalid request data', async () => {
    const invalidData = { age: 30 }; // Missing required fields

    const res = await request(app)
      .post('/training')
      .set('Authorization', `Bearer ${token}`)
      .send(invalidData);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('errors');
    expect(Array.isArray(res.body.errors)).toBe(true);
  });
});

afterAll(async () => {
    await mongoose.connection.close();
  });