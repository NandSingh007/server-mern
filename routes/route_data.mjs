// Import the necessary dependencies
import express from 'express';
import { getAllUser, sendAllUser } from '../controllers/ControllerUser.mjs';

// Create an instance of the Express Router
const route = express.Router();

// Define routes and associate them with respective controller functions
route.get('/booking', getAllUser); // GET request to fetch user data
route.post('/booking', sendAllUser); // POST request to create and save user data

// Export the configured router for use in other parts of the application
export default route;
