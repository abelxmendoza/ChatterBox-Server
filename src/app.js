
// server.js or app.js

require('dotenv').config(); // This should be at the top to load environment variables
const express = require('express');
const connectToMongoDB = require('./config/database'); // Adjust the path based on your project structure

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToMongoDB();

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
// Define your routes here, for example:
app.get('/', (req, res) => {
  res.send('Welcome to the Comment Section API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
