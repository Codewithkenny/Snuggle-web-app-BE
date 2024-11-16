// profileRoutes.js
const express = require("express");
const router = express.Router();
const { getProfiles, getProfileById } = require("../controllers/ProfileController");

router.get("/profiles", getProfiles); // Get all profiles
router.get("/profiles/:id", getProfileById); // Get a specific profile by ID

module.exports = router;
