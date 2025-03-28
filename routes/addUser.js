const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/addUser', async (req, res) => {
    const {  name, login, password } = req.body;

    try {
        const existingUser = await User.findOne({ login: login });
        if (existingUser) {
            return res.status(400).json({ message: 'Invalid login or password' });
        }
        const newUser = new User({
            name,
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