const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost", // Replace with your database host
  user: "root", // Replace with your database username
  password: "", // Replace with your database password
  database: "lets-grow", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Routes
app.post("/investor", (req, res) => {
  const { firstName, lastName, phoneNumber, email, password, priceRange, categories} = req.body;

  const query = `
    INSERT INTO investors (firstName, lastName, phoneNumber, email, password, priceRange, categories)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [firstName, lastName, phoneNumber, email, password, priceRange, categories],
    (err, result) => {
      if (err) {
        console.error("Error inserting into investors table:", err);
        res.status(500).json({ error: "Failed to register investor" });
      } else {
        res.status(201).json({ message: "Investor registered successfully!" });
      }
    }
  );
});

app.post("/startup", (req, res) => {
  const { firstName, lastName, phoneNumber, email, password, priceRange, categories} = req.body;

  const query = `
    INSERT INTO startups (firstName, lastName, phoneNumber, email, password, priceRange, categories)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [firstName, lastName, phoneNumber, email, password, priceRange, categories],
    (err, result) => {
      if (err) {
        console.error("Error inserting into startups table:", err);
        res.status(500).json({ error: "Failed to register startup" });
      } else {
        res.status(201).json({ message: "Startup registered successfully!" });
      }
    }
  );
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});