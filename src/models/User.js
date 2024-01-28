const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  google: {
    id: String, // Google's unique identifier for the user
    email: String, // User's email from Google profile
    name: String, // User's name from Google profile
    photo: String // URL to the user's profile photo from Google
  },
  // Retain the existing fields and add any additional ones as needed
  name: String,
  photo: String, // You might want to keep this for users who don't use Google to sign in
  // Add more fields here as per your application's requirements
});

const User = mongoose.model('User', userSchema);

module.exports = User;
