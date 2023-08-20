// config.mjs

// Configuration object with various settings
export default {
  // MongoDB connection URI
  mongoURI: 'mongodb://127.0.0.1:27017/bookMovie',
  
  // Port for the server to listen on (use environment variable or default to 8080)
  port: process.env.PORT || 8080,
};
