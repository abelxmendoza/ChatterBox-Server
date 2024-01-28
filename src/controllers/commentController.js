// src/controllers/commentController.js

const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateComment = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedComment) {
      return res.status(404).send('Comment not found.');
    }
    res.json(updatedComment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).send('Comment not found.');
    }
    res.status(204).send(); // No content to send back for a delete operation
  } catch (error) {
    res.status(500).send(error.message);
  }
};
