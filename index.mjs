// Import necessary dependencies
import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.mjs';
import route from './routes/route_data.mjs';
import cors from 'cors';

// Create an instance of the Express application
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Enable CORS to allow cross-origin requests
app.use(cors());

// Use the defined routes
app.use('/api', route);

// Connect to MongoDB using the provided configuration
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
