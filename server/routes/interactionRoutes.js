const router = require('express').Router();
const { Favorites, Comments } = require('../../models');
const withAuth = require('../../utils/auth');
const stripe = require('stripe')('your-stripe-secret-key');

// Route to allow users to favorite an image
router.post('/favorite', withAuth, async (req, res) => {
  try {
    // Extract image_id from the request body or parameters
    const { image_id } = req.body;

    // Create a new favorite record for the user
    const newFavorite = await Favorites.create({
      user_id: req.session.user_id,
      image_id,
    });

    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to allow users to comment on an image
router.post('/comment', withAuth, async (req, res) => {
  try {
    // Extract comment data from the request body
    const { image_id, text } = req.body;

    // Create a new comment record for the user
    const newComment = await Comments.create({
      user_id: req.session.user_id,
      image_id,
      text,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to handle Stripe purchases
router.post('/purchase', withAuth, async (req, res) => {
  try {
    // Extract purchase data from the request body
    const { projectId, token } = req.body;

    // Create a charge using the Stripe API
    const charge = await stripe.charges.create({
      amount: 1000, // The amount in cents (adjust as needed)
      currency: 'usd',
      description: 'Photography Project Purchase',
      source: token, // Token representing the user's card information
    });

    // Save the purchase information to your database
    

    res.status(200).json({ message: 'Purchase successful', charge });
  } catch (err) {
    res.status(400).json({ message: 'Purchase failed', error: err });
  }
});

module.exports = router;
