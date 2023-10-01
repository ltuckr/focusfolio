
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  identifier: { type: String, required: true, unique: true }, // Add an 'identifier' field
  imageUrl: { type: String, required: true },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
