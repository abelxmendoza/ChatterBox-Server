const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  photo: String, // URL to the user's photo
  // You can add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;

