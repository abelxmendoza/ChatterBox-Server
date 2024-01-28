// server.js or app.js

require('dotenv').config(); // Load environment variables
const express = require('express');
const connectToMongoDB = require('./config/database'); // Adjust the path based on your project structure

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToMongoDB();

// Middlewares for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Comment Section API!');
});

// Importing comment routes and using them
const commentRoutes = require('./routes/comments');
app.use('/api/comments', commentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
