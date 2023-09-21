//.env configuration file
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

// Define environment-specific variables
module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name',
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
};
