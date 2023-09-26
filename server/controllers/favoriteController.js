// FavoriteController.js

const Favorite = require('../models/Favorite');

// Allow users to favorite an image
exports.favoriteImage = async (req, res) => {
  try {
    const { image_id } = req.body;

    // Create a new favorite record for the user
    const newFavorite = await Favorite.create({
      user_id: req.userId, //store user ID in the JWT payload
      image_id,
    });

    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Add more favorite controllers as needed
