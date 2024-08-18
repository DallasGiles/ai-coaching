const axios = require('axios');

const generateTrainingPlan = async (data) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
      prompt: `Create a training plan for a ${data.fitnessLevel} athlete preparing for a ${data.goal} in ${data.weeks} weeks.`,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error in generateTrainingPlan:', error.message);
    throw new Error('Failed to generate training plan');
  }
};

module.exports = { generateTrainingPlan };