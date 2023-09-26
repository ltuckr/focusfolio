// PurchaseController.js

const Purchase = require('../models/Purchase');

// Handle Stripe purchases
exports.handlePurchase = async (req, res) => {
  try {
    const { projectId, token } = req.body;
    
    // Create a charge using the Stripe API
    // Be sure to configure your Stripe API integration
    const charge = await stripe.charges.create({
      amount: 1000, // The amount in cents (adjust as needed)
      currency: 'usd',
      description: 'Photography Project Purchase',
      source: token, // Token representing the user's card information
    });

    // Save the purchase information to your database
    const newPurchase = new Purchase({
      projectId, // Store the project ID or relevant information
      userId: req.userId, //  store user ID in the JWT payload
      amount: 10.00, // The purchase amount
      timestamp: new Date(),
    });

    await newPurchase.save();

    res.status(200).json({ message: 'Purchase successful', charge });
  } catch (err) {
    res.status(400).json({ message: 'Purchase failed', error: err.message });
  }
};

// Add more purchase controllers as needed

