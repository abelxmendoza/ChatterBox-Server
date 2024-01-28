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

