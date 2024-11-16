const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  isOnline: { type: Boolean, default: false },
});

module.exports = mongoose.model("Profile", profileSchema);
