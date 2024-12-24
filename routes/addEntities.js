const express = require('express');
const { Class, Student, Session, Register } = require('../models/models');

const router = express.Router();

// Route to add a new class
router.post('/addClass', async (req, res) => {
    const { level, section, num, students } = req.body;

    try {
        const newClass = new Class({
            level,
            section,
            num,
            students
        });
        await newClass.save();

        res.status(201).json({ message: 'Class added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Route to add a new student
router.post('/addStudent', async (req, res) => {
    const { name, status } = req.body;

    try {
        const newStudent = new Student({
            name,
            status
        });
        await newStudent.save();

        res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Route to add a new session
router.post('/addSession', async (req, res) => {
    const { teacherId, subject, time, room, classId } = req.body;

    try {
        const newSession = new Session({
            teacherId,
            subject,
            time,
            room,
            classId
        });
        await newSession.save();

        res.status(201).json({ message: 'Session added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Route to add a new register
router.post('/addRegister', async (req, res) => {
    const { classId, sessionId, teacherId, students } = req.body;

    try {
        const newRegister = new Register({
            classId,
            sessionId,
            teacherId,
            students
        });
        await newRegister.save();

        res.status(201).json({ message: 'Register added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
