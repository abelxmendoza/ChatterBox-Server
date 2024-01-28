const express = require('express');
const router = express.Router();
const { getComments, postComment } = require('../controllers/commentController');

// Get all comments
router.get('/', getComments);

// Post a new comment
router.post('/', postComment);

// Additional routes for likes, replies, voice memos, etc.

module.exports = router;
