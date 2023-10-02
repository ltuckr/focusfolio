
const mongoose = require('mongoose');

// Import individual models
const User = require('./User');
const Image = require('./Image');
const Favorite = require('./Favorite');

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
