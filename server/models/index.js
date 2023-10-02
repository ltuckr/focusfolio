// models/index.js

const mongoose = require('mongoose');

// Import individual models
const User = require('./User');
const Image = require('./Image');
const Favorite = require('./Favorite');


// MongoDB connection string
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/focusfolio';

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = {
  User,
  Image,
 Favorite
};
