// ProjectController.js

const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, images } = req.body;
    // Create a new project and save it to the database
    const newProject = new Project({
      title,
      description,
      images,
      photographer_id: req.userId, // store user ID in the JWT payload
    });
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch a list of projects
exports.getProjects = async (req, res) => {
  try {
    // Fetch projects from the database
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add more project controllers as needed
