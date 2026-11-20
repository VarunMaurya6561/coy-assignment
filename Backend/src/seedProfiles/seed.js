
require('dotenv').config()
const connectDB = require('../config/db.js')
const mongoose = require('mongoose')
const profile = require('../models/profile.model.js')
const profiles = require('./profiles.js')

const seedProfiles = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        
        console.log("Profiles count:", profiles.length);
        console.log("First profile:", profiles[0]);

        // Remove existing profiles
        await profile.deleteMany({});

        // Insert sample profiles
        await profile.insertMany(profiles);

        console.log(`${profiles.length} profiles inserted successfully!`);

    } catch (error) {
        console.error("Seeding failed:", error.message);
    } finally {
        await mongoose.connection.close();
        console.log("Database connection closed.");
    }
};

seedProfiles();
