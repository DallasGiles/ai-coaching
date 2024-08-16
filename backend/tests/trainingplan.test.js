const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

describe('Training Plan Routes', () => {
  let token;

  beforeAll(() => {
    // Mock a JWT token
    token = jwt.sign({ userId: 'fakeUserId' }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
  });

  it('should generate a training plan for a valid request', async () => {
    const mockAthleteData = {
      age: 30,
      fitnessLevel: 'intermediate',
      goal: 'marathon',
      weeks: 16,
    };

    const res = await request(app)
      .post('/training')
      .set('Authorization', `Bearer ${token}`)
      .send(mockAthleteData);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('plan');
    expect(typeof res.body.plan).toBe('string');
  });

  it('should return 400 for invalid request data', async () => {
    const invalidData = {
      age: 30,
      // Missing required fields like fitnessLevel and goal
    };

    const res = await request(app)
      .post('/training')
      .set('Authorization', `Bearer ${token}`)
      .send(invalidData);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});