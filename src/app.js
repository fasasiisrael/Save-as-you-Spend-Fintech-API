// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (make sure you have MongoDB installed and running)
mongoose.connect('mongodb://localhost:27017/save_as_you_spend', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
