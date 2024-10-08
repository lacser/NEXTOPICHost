const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/api/completion', async (req, res) => {
  const { messages, model } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      messages: messages,
      model: model,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    const errorMessage = {
        error: `Error in calling OpenAI API: ${error.message}`,
        openAIError: error.response.data,
    };
    
    res.status(500).json(errorMessage);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
