// controllers/transactionController.js
const Transaction = require('../models/transactionModel');
const User = require('../models/userModel');

async function createTransaction(req, res) {
  try {
    const { userId, description, amount } = req.body;

    // Retrieve user's savings percentage
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Calculate the amount to save based on the user's percentage
    const savingsAmount = (amount * user.savingsPercentage) / 100;

    // Deduct the spent amount from the user's balance
    user.balance -= amount;

    // Save the updated user balance
    await user.save();

    // Create a new transaction record
    const transaction = new Transaction({
      userId,
      description,
      amount,
    });

    // Save the transaction
    await transaction.save();

    // Return the transaction details
    return res.status(201).json({
      transaction,
      savingsAmount,
      remainingBalance: user.balance,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createTransaction,
};
