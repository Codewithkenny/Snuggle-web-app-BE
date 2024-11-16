const { Pool } = require("pg");
require("dotenv").config();

// PostgreSQL connection pool setup
const pool = new Pool({
  user: process.env.PG_USER, // Your PostgreSQL username
  host: process.env.PG_HOST, // 'localhost' if running locally
  database: process.env.PG_DATABASE, // Database name
  password: process.env.PG_PASSWORD, // Your PostgreSQL password
  port: process.env.PG_PORT || 5432, // Default PostgreSQL port is 5432
});

module.exports = pool; // Export the pool to be used in the controller
