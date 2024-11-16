const express = require("express");
const router = express.Router();
const { getNotifications } = require("../controllers/NotificationController");

router.get("/", getNotifications); // Fetch notifications

module.exports = router;
