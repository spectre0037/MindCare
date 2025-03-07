const express = require('express');
const router = express.Router();
const { signUpDoctor } = require('../controllers/doctorController');

// POST route for doctor sign-up
router.post('/signup', signUpDoctor);

module.exports = router;
