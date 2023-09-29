const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  // Fields for user-specific data
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
