const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const stravaRoutes = require('./routes/stravaRoutes');
const trainingPlanRoutes = require('./routes/trainingPlanRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/strava', stravaRoutes);
app.use('/training', trainingPlanRoutes);

app.use(errorMiddleware);

module.exports = app;