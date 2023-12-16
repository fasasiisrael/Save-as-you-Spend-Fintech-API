// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  balance: { type: Number, default: 0 },
  savingsPercentage: { type: Number, default: 10 }, // Default savings percentage
});

module.exports = mongoose.model('User', userSchema);
