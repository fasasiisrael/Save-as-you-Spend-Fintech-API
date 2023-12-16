// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:userId', userController.getUserSettings);
router.put('/:userId/settings', userController.updateUserSettings);

module.exports = router;
