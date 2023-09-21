const Project = require('../models/Project'); // Replace with project model when it is created

// Controller for creating a new photography project
const createProject = async (req, res) => {
  try {
    // Extract project data from the request body
    const { title, description, photographerId, images } = req.body;

    // Create a new project document
    const newProject = new Project({
      title,
      description,
      photographer: photographerId, // Assuming you have a photographer reference
      images,
    });

    // Save the project to the database
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller for retrieving a list of photography projects
const getProjects = async (req, res) => {
  try {
    // Retrieve a list of projects from the database
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

// Controller for deleting a photography project by ID
const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Find and delete the project by ID
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(200).json({ message: 'Project deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  createProject,
  getProjects,
  deleteProject,
};
