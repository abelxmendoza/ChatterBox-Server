const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('author');
    res.json(comments);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.postComment = async (req, res) => {
  try {
    const newComment = new Comment({
      content: req.body.content,
      // Set other properties from the request
    });
    const comment = await newComment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
