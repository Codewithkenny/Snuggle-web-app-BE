const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const profileRoutes = require("./routes/ProfileRoutes"); // Assuming profile routes are defined

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL Connection Setup
const pool = new Pool({
  user: process.env.PG_USER, // Your PostgreSQL username
  host: process.env.PG_HOST, // 'localhost' if running locally
  database: process.env.PG_DATABASE, // Database name
  password: process.env.PG_PASSWORD, // Your PostgreSQL password
  port: process.env.PG_PORT || 5432, // Default PostgreSQL port is 5432
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Error connecting to PostgreSQL:", err));

// Test Route
app.get("/", (req, res) => {
  res.send('Welcome to the backend service!');
});

// Routes for profile-related operations
app.use("/api", profileRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use("/api", profileRoutes);