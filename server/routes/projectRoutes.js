const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Import your Project model
const authMiddleware = require('../middleware/authMiddleware'); // Import authentication middleware

// Route to create a new project
router.post('/create', authMiddleware, async (req, res) => {
  try {
    // Extract project data from the request body
    const { title, description, images } = req.body;

    // Create a new project
    const newProject = new Project({
      title,
      description,
      images,
      clientId: req.userId, // Assuming client ID in the JWT payload
    });

    // Save the project to the database
    await newProject.save();

    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch a list of projects
router.get('/', async (req, res) => {
  try {
    // Fetch projects from the database
    const projects = await Project.find();

    res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add more project routes as needed

module.exports = router;
