// logic to help the app know how to handle outgoing and incoming user data

const db = require('../config/connection');

const { User } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
    try {
        console.log('User data being deleted...');
        await User.deleteMany({});
        console.log('User data deleted, ready for more!');

        console.log('New user data being sent...');

        const newUsers = await User.insertMany(userData);
        console.log('User seed data added successfully');
    } catch (error) {
        console.log('Error sending new user data...', error);
    } finally {
        db.close();
        process.exit(0);
    }
});

