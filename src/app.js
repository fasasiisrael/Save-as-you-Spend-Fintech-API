// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');
const rootRoute = require('./routes/rootRoute');

mongoose.set('strictQuery', false);

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/save_as_you_spend', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Redirect root path to Swagger documentation
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Include other routes
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
