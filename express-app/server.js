const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express frontend is running!</h1><p>Connected to Flask at port 5000</p>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'express-frontend' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express running on port ${PORT}`);
});
