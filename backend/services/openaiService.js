const axios = require('axios');

const generateTrainingPlan = async (athleteData) => {
  const prompt = `Create a marathon training plan for a user with the following details: ${JSON.stringify(athleteData)}`;
  
  const response = await axios.post('https://api.openai.com/v1/completions', {
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
  }, {
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  return response.data.choices[0].text;
};

module.exports = { generateTrainingPlan };