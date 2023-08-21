// Import necessary dependencies
import express from 'express';
import mongoose from 'mongoose';
// import { User } from './models/User.mjs'; // Import User model if needed
import config from './config/config.mjs'; // Import configuration
import route from './routes/route_data.mjs'; // Import routes (make sure to use .mjs extension)
import cors from 'cors';

// Create an instance of the Express application
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Enable CORS to allow cross-origin requests
app.use(cors());

// Use the defined routes
app.use('/api', route);
const option = {
  auth:{
    username:process.env.db_username,
    password:process.env.db_password,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
// Connect to MongoDB using the provided configuration
mongoose.connect(config.mongoURI,option)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Start the server and listen on the specified port
const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
