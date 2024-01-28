// server.js or app.js


require('dotenv').config();
const express = require('express');
const passport = require('passport');
require('./config/passport-setup'); // This line is crucial
const connectToMongoDB = require('./config/database');



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

// Importing auth routes and using them
const authRoutes = require('./routes/auth-routes'); // Make sure the path is correct
app.use('/auth', authRoutes);

// Importing comment routes and using them
const commentRoutes = require('./routes/comments');
app.use('/api/comments', commentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
