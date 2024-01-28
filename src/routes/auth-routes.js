// src/routes/auth-routes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();




// Route to start the Google authentication process
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Route for Google to call back to once the user has authenticated
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect to profile or another page.
  res.redirect('/profile');
});

module.exports = router;
