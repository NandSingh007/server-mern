import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // Node.js module for working with URLs
import path from 'path';

// Get the directory path of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

// Configuration object with various settings
export default {
  // MongoDB connection URI
  mongoURI: `mongodb+srv://${process.env.DB_USERNAME}:ZLgvddawhrCxTaAm@cluster123.892geca.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  
  // Port for the server to listen on (use environment variable or default to 8080)
  port: process.env.PORT || 8080,
};
