// Comment Model
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: true },
  text: { type: String, required: true },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
