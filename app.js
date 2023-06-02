const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming requests
app.use(bodyParser.json());

// Define your webhook endpoint
app.post('/webhook', (req, res) => {
  const event = req.body;
  // Process the event here
  console.log('Received event:', event);
  
  // Send a response to acknowledge receipt of the event
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
