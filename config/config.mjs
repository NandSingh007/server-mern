import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // Node.js module for working with URLs
import path from 'path';

// Get the directory path of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

// Configuration object with various settings
export default {
  // MongoDB connection URI
  mongoURI: process.env.MONGOURL,
  
  // Port for the server to listen on (use environment variable or default to 8080)
  port: process.env.PORT || 4501,
};
