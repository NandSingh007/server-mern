// Import the necessary dependencies
import { bookmovies } from '../models/User.mjs';

// Handler to get all users (assuming 'bookmovies' represents the user data)
export const getAllUser = async (req, res, next) => {
    try {
        // Find the most recent user (assuming '_id' is used for sorting)
        const users = await bookmovies.findOne().sort({ _id: -1 }).limit(1);
        return res.status(200).json({ users });
    } catch (err) {
        console.error(err);
        
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Handler to send user data
export const sendAllUser = async (req, res, next) => {
    try {
        // Extract movie, slot, and seats data from the request body
        const { movie, slot, seats } = req.body;

        // Create a new 'bookmovies' document with the extracted data
        const newUser = new bookmovies({
            movie,
            slot,
            seats,
        });

        // Save the new user document to the database
        const savedUser = await newUser.save();
        
        // Respond with the saved user data
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
