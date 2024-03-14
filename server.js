// server.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());


// Kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Thay username nếu cần
  password: '', // Thay password nếu cần
  database: 'news' // Thay tên cơ sở dữ liệu nếu cần
});

// Khi kết nối đến cơ sở dữ liệu thành công
connection.connect(error => {
  if (error) {
    console.error('Error connecting to database:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});


// API endpoint để lấy dữ liệu từ cơ sở dữ liệu
app.get('/pop_music', (req, res) => {
  const query = 'SELECT * FROM pop_music';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Error querying database' });
    } else {
        console.log('Query result:', results);
      res.json(results);
    }
    console.log('Query result:', results);
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
