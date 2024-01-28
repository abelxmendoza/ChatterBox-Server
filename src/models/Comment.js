const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  likes: { type: Number, default: 0 },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  voiceMemo: String, // URL to the voice memo file
  createdAt: { type: Date, default: Date.now },
  // Include other fields as necessary
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

/*
// src/models/Comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Placeholder for future User model
  likes: { type: Number, default: 0 },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], // For nested comments
  voiceMemo: { type: String }, // URL or path to the voice memo file
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
*/