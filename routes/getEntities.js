const express = require('express');
const { Class, Student, Session, Register } = require('../models/models');

const router = express.Router();

// Route to retrieve all classes
router.get('/getClasses', async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Route to retrieve all students
router.get('/getStudents', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Route to retrieve all sessions
router.get('/getSessions', async (req, res) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Route to retrieve all registers
router.get('/getRegisters', async (req, res) => {
    try {
        const registers = await Register.find();
        res.status(200).json(registers);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
