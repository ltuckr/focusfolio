// logic to help dismantle and compile old and new project data from the project data seed

const db = require('../config/connection');

const { Project } = require('../models');
// replace project with model name 

const projectData = require('./projectData.json');


db.once('open', async () => {
    try {
        console.log('Current project data being deleted, please wait...');

        await Project.deleteMany({});

        console.log('Data deleted successfully.');

        console.log('Moving to seed new project data.');

        const newProjects = await Project.insertMany(projectData);

        console.log('New data successfully seeded.');
    } catch (error) {
        console.error('Error! Could not seed new data.', error);
    } finally {
        db.close();
        process.exit(0);
    }
});

