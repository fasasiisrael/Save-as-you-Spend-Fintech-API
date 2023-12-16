// controllers/userController.js
const User = require('../models/userModel');

async function getUserSettings(req, res) {
  try {
    const { userId } = req.params;

    // Retrieve user's settings
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({
      username: user.username,
      balance: user.balance,
      savingsPercentage: user.savingsPercentage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateUserSettings(req, res) {
  try {
    const { userId } = req.params;
    const { savingsPercentage } = req.body;

    // Update user's settings
    const user = await User.findByIdAndUpdate(userId, { savingsPercentage }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({
      username: user.username,
      balance: user.balance,
      savingsPercentage: user.savingsPercentage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getUserSettings,
  updateUserSettings,
};
