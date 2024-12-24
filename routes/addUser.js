const express = require('express');
const User = require('../models/models').User;

const router = express.Router();

// Route to add a new user
router.post('/addUser', async (req, res) => {
    const {  name, role, login, password } = req.body;

    try {
        // Check if the user with the given login already exists
        const existingUser = await User.findOne({ login: login });
        if (existingUser) {
            return res.status(400).json({ message: 'Invalid login or password' });
        }

        // Create a new user
        const newUser = new User({
            name,
            role,
            login,
            password
        });
        await newUser.save();

        res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;