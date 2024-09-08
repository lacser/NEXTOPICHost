// Temporary server entry point, content is the same as stream.js, should be refactored after adding more functions
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Avoids cross-origin resource sharing restrictions during local deployment, should be removed in production environment
const app = express();
app.use(express.json());

app.use(cors()); // Avoids cross-origin resource sharing restrictions during local deployment, should be removed in production environment

app.post('/api/completion', (req, res) => {
  const { messages, model } = req.body;

  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    body: JSON.stringify({
      messages: messages,
      model: model,
      stream: true,
    }),
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    response.body.pipe(res);
  })
  .catch(error => {
    console.error(error);
    const errorMessage = {
        error: `Error in calling OpenAI API: ${error.message}`,
        openAIError: error.response.data,
    };
    
    res.status(500).json(errorMessage);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
