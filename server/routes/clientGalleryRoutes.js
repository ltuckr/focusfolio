// routes/clientGalleryRoutes.js

const express = require('express');
const router = express.Router();
const ClientGallery = require('../models/ClientGallery');
const Image = require('../models/Image');

// Route to fetch a specific client's gallery
router.get('/:clientUserId', async (req, res) => {
  try {
    const { clientUserId } = req.params;

    // Find the client's gallery by user ID
    const clientGallery = await ClientGallery.findOne({ clientUserId }).populate('images');

    if (!clientGallery) {
      return res.status(404).json({ message: 'Client gallery not found' });
    }

    res.status(200).json({ clientGallery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to add an image to a client's gallery
router.post('/:clientUserId', async (req, res) => {
    try {
        const { clientUserId } = req.params;
        const { imageId } = req.body;
    
        // Find the client's gallery by user ID
        const clientGallery = await ClientGallery.findOne({ clientUserId });
    
        if (!clientGallery) {
        return res.status(404).json({ message: 'Client gallery not found' });
        }
    
        // Find the image by ID
        const image = await Image.findById(imageId);
    
        if (!image) {
        return res.status(404).json({ message: 'Image not found' });
        }
    
        // Add the image to the client's gallery
        clientGallery.images.push(image);
        await clientGallery.save();
    
        res.status(200).json({ clientGallery });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    }
);
