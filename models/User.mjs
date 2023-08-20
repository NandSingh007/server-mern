// Import the Mongoose library
import mongoose from 'mongoose';

// Define your schema for the 'bookmovies' collection
const bookMovieSchema = new mongoose.Schema({
    // Define properties and their types with validation rules
    movie: { type: String, required: true }, // Movie name (required)
    slot: { type: String, required: true },  // Time slot (required)
    seats: {
        // Define individual seat properties with their types
        A1: Number,
        A2: Number,
        A3: Number,
        A4: Number,
        D1: Number,
        D2: Number
    }
});

// Create and export the 'bookmovies' model based on the schema
export const bookmovies = mongoose.model('bookmovies', bookMovieSchema);
