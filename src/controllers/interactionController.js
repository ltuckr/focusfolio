const Project = require('../models/Project'); // Replace with project model
const User = require('../models/User'); // Replace with user model

// Controller for adding a project to favorites
const addFavorite = async (req, res) => {
  try {
    const projectId = req.params.id;
    const userId = req.user.id; // With user authentication middleware

    // Find the user and project
    const user = await User.findById(userId);
    const project = await Project.findById(projectId);

    if (!user || !project) {
      return res.status(404).json({ message: 'User or project not found.' });
    }

    // Add the project to the user's favorites
    user.favorites.push(projectId);
    await user.save();

    res.status(200).json({ message: 'Project added to favorites.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller for removing a project from favorites
const removeFavorite = async (req, res) => {
  try {
    const projectId = req.params.id;
    const userId = req.user.id; // Assuming you have user authentication middleware

    // Find the user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Remove the project from the user's favorites
    user.favorites = user.favorites.filter((favId) => favId.toString() !== projectId);
    await user.save();

    res.status(200).json({ message: 'Project removed from favorites.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller for purchasing an image
const purchaseImage = async (req, res) => {
  try {
    const projectId = req.params.id;
    const imageId = req.body.imageId; // If we send the image ID in the request body
    const userId = req.user.id; // If we have user authentication middleware

    // Find the user and project
    const user = await User.findById(userId);
    const project = await Project.findById(projectId);

    if (!user || !project) {
      return res.status(404).json({ message: 'User or project not found.' });
    }

    // Check if the image ID is valid (you should implement image validation logic)
    const isValidImage = project.images.includes(imageId);

    if (!isValidImage) {
      return res.status(400).json({ message: 'Invalid image ID.' });
    }

    // Perform the purchase logic (e.g., deduct credits, update purchase history, etc.)
    // ...

    res.status(200).json({ message: 'Image purchased successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller for leaving a comment on a project
const addComment = async (req, res) => {
  try {
    const projectId = req.params.id;
    const { text } = req.body;
    const userId = req.user.id; // Assuming you have user authentication middleware

    // Find the user and project
    const user = await User.findById(userId);
    const project = await Project.findById(projectId);

    if (!user || !project) {
      return res.status(404).json({ message: 'User or project not found.' });
    }

    // Create a new comment
    const newComment = {
      user: userId,
      text,
      createdAt: new Date(),
    };

    // Add the comment to the project's comments array
    project.comments.push(newComment);

    // Save the project with the new comment
    await project.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  addFavorite,
  removeFavorite,
  purchaseImage,
  addComment,
};
