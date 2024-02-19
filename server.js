const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT ||  8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});