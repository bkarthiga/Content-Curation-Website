const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Setup PostgreSQL connection
const pool = new Pool({
    
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'postgres',
  port: 5432,
   
});

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const { name, email } = req.body;
  
  // Basic validation (optional)
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  try {
    // Insert data into PostgreSQL database
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    // Send a response after successful insertion
    res.send(`User ${result.rows[0].name} added successfully!`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${5432}`);
});