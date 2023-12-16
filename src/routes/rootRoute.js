// src/routes/rootRoute.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Save As You Spend API!');
});

module.exports = router;
