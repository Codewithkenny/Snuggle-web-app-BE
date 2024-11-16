const pool = require("../db"); // Assuming you have your database connection set up in a separate db.js file

// Get all profiles
const getProfiles = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM profiles"); // Query to get all profiles
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No profiles found" });
    }
    res.json(result.rows); // Send back the rows as JSON
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ message: "Error fetching profiles" });
  }
};

// Get a specific profile by ID
const getProfileById = async (req, res) => {
  try {
    const { id } = req.params; // Extract the profile ID from the request parameters
    const result = await pool.query("SELECT * FROM profiles WHERE id = $1", [id]); // Query to get a profile by ID

    // If no profile found, return 404 error
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // Send the found profile as a response
    res.json(result.rows[0]); // Return the single profile as JSON
  } catch (error) {
    console.error(`Error fetching profile with ID ${req.params.id}:`, error);
    res.status(500).json({ message: "Error fetching profile" });
  }
};

module.exports = { getProfiles, getProfileById };
