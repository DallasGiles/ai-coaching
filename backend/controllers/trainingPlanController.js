const createTrainingPlan = async (req, res) => {
    try {
      console.log('Received body:', req.body); // Log the request body
      const planText = await generateTrainingPlan(req.body);
      console.log('Generated plan:', planText); // Log the generated plan
  
      const newPlan = new TrainingPlan({
        userId: req.user.userId,
        planText,
      });
  
      await newPlan.save();
  
      res.json({ plan: planText });
    } catch (error) {
      console.error('Error creating training plan:', error.message); // Log the error
      res.status(500).json({ error: error.message });
    }
  };