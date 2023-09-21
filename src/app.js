const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./database'); // Import the mongoose object configured in 'database.js'
const routes = require('./routes'); // Import application routes

const app = express();

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());

// Routes configuration
app.use('/api', routes); // Use defined API routes

// Start the server
const { PORT } = require('./environment');
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
