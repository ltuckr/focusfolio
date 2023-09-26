// models/ClientGallery.js

const mongoose = require('mongoose');

const clientGallerySchema = new mongoose.Schema({
  clientUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  images: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image', // Reference to the Image model
    },
  ],
});

module.exports = mongoose.model('ClientGallery', clientGallerySchema);
