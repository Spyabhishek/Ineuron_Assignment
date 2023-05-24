const express = require('express');
const app = express();


const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
  { id: 4, title: 'Post 4' },
  { id: 5, title: 'Post 5' },
];

// Endpoint to get 20 posts
app.get('/post', (req, res) => {
  const twentyPosts = posts.slice(0, 20);
  res.json(twentyPosts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
