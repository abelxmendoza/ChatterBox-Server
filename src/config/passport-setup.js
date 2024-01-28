// src/config/passport-setup.js

console.log('Setting up Passport with Google OAuth');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Adjust the path as necessary to your User model

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in our database
        const existingUser = await User.findOne({ 'google.id': profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }

        // If not, create a new user in our database
        const newUser = await new User({
          google: {
            id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            photo: profile.photos[0].value,
          },
        }).save();

        done(null, newUser);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

