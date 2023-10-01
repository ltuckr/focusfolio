const db = require("../config/connection");

const { User, Image } = require("../models");

const userData = require("./userData.json");
const imageData = require("../seeds/imageData.json");

db.once("open", async () => {
  try {
    console.log("User data being deleted...");
    await User.deleteMany({});
    console.log("User data deleted, ready for more!");

    console.log("New user data being sent...");

    const users = await User.insertMany(userData);

    console.log("User seed data added successfully");

    console.log("Current image data being deleted...");
    await Image.deleteMany({});
    console.log("Data Deleted!");

    console.log("New Image data coming...");
    const images = await Image.insertMany(imageData);

    console.log("New Image created");

    
  } catch (error) {
    console.log("Error sending new user data...", error);
  } finally {
    db.close();
    
    process.exit(0);
  }
});
