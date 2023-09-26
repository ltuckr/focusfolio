// CommentController.js

const Comment = require('../models/Comment');

// Allow users to comment on an image
exports.commentOnImage = async (req, res) => {
  try {
    const { image_id, text } = req.body;

    // Create a new comment record for the user
    const newComment = await Comment.create({
      user_id: req.userId, // store user ID in the JWT payload
      image_id,
      text,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Add more comment controllers as needed
