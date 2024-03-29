const express = require('express');
const mysql = require('mysql');

// Set up the database connection
const connection = mysql.createConnection({
  host: ' localhost:3306',
  user: 'radiobox_radiobox',
  password: 'zionfamily1',
  database: 'radiobox_object detection'
});

// Create an Express.js app
const app = express();

// Set up a POST endpoint to receive detected content and store it in the database
app.post('https://object-detection-api-xaqi.onrender.com', (req, res) => {
  const { content } = req.body; // Assuming content is sent in the request body
  const sql = 'INSERT INTO radiobox_object detection (content) VALUES (?)';
  connection.query(sql, [content], (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error storing content in database');
    } else {
      console.log('Content stored in database');
      res.status(200).send('Content stored in database');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
