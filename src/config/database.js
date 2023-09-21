const mongoose = require('mongoose');

// MongoDB connection URL - commented out for now
//const dbURL = 'mongodb://localhost:27017/your-database-name';

// MongoDB connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// Establish the MongoDB connection
mongoose.connect(dbURL, mongoOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Export the mongoose object for use in your application
module.exports = mongoose;
