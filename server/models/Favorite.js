const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: true },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
