// how the app will take the seed date and use it from the interactionData.json application

const db = require('../config/connection');
 
const { Interaction } = require('../models');

const interactionData = require('../seeds/interactionData.json');

db.once('open', async () => {
    try {
        console.log('Current interaction data being deleted...');
        await Interaction.deleteMany({});
        console.log('Data Deleted!!!');

        console.log('New interaction data coming...');
        const newInteractions = await
    Interaction.insertMany(interactionData);
    console.log('New Interaction created');
    } catch (error) {
        console.error('Error...cannot seed new incoming data.');
    } finally {
        db.close();
        process.exit(0);
    }
});

