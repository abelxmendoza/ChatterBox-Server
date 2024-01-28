const axios = require('axios');

const baseURL = 'http://localhost:3000/api/comments'; // Adjust if your server runs on a different port

// Function to get comments
async function getComments() {
  try {
    const response = await axios.get(baseURL);
    console.log('GET /api/comments', response.data);
    return response.data; // Return the list of comments
  } catch (error) {
    console.error('Error fetching comments', error.response?.data || error.message);
  }
}

// Function to create a comment
async function createComment(commentData) {
  try {
    const response = await axios.post(baseURL, commentData);
    console.log('POST /api/comments', response.data);
    return response.data; // Return the created comment
  } catch (error) {
    console.error('Error creating comment', error.response?.data || error.message);
  }
}

// Function to update a comment
async function updateComment(commentId, updateData) {
  try {
    const response = await axios.put(`${baseURL}/${commentId}`, updateData);
    console.log(`PUT /api/comments/${commentId}`, response.data);
  } catch (error) {
    console.error('Error updating comment', error.response?.data || error.message);
  }
}

// Function to delete a comment
async function deleteComment(commentId) {
  try {
    const response = await axios.delete(`${baseURL}/${commentId}`);
    console.log(`DELETE /api/comments/${commentId}`, 'Comment deleted successfully');
  } catch (error) {
    console.error('Error deleting comment', error.response?.data || error.message);
  }
}

// Main function to run the example usage
async function main() {
  await getComments(); // Retrieve and log all comments

  // Create a new comment and capture the returned data
  const newComment = await createComment({
    content: 'This is a test comment from the script',
    author: '60af924b92ff8f001f2b5c4f', // Replace with a valid ObjectId from your User collection
  });

  // If the new comment was successfully created, update and delete it
  if (newComment && newComment._id) {
    await updateComment(newComment._id, {
      content: 'This comment has been updated',
    });

    await deleteComment(newComment._id);
  }

  await getComments(); // Retrieve and log all comments to see the final state
}

main(); // Execute the main function
