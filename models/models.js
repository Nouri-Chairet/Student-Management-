const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: { type: Number, unique: true },
    name: String,
    role: { type: String, enum: ['admin', 'teacher'] },
    login: String,
    password: String
});

const studentSchema = new Schema({
    studentId: { type: Number, unique: true },
    name: String,
    status: String
});

const sessionSchema = new Schema({
    sessionId: { type: Number, unique: true },
    teacherId: { type: Number, ref: 'User' },
    subject: String,
    time: String,
    room: String,
    classId: { type: Number, ref: 'Class' }
});

const classSchema = new Schema({
    classId: { type: Number, unique: true },
    level: { type: Number, min: 1, max: 4 },
    section: { type: String, enum: ['Trunc Commun', 'Science', 'Info', 'Tech', 'Math', 'letter'] },
    num: Number,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const registerSchema = new Schema({
    registerId: { type: Number, unique: true },
    classId: { type: Number, ref: 'Class' },
    sessionId: { type: Number, ref: 'Session' },
    teacherId: { type: Number, ref: 'User' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

userSchema.plugin(AutoIncrement, { inc_field: 'userId' });
studentSchema.plugin(AutoIncrement, { inc_field: 'studentId' });
sessionSchema.plugin(AutoIncrement, { inc_field: 'sessionId' });
classSchema.plugin(AutoIncrement, { inc_field: 'classId' });
registerSchema.plugin(AutoIncrement, { inc_field: 'registerId' });

module.exports = {
    User: mongoose.model('User', userSchema),
    Student: mongoose.model('Student', studentSchema),
    Session: mongoose.model('Session', sessionSchema),
    Class: mongoose.model('Class', classSchema),
    Register: mongoose.model('Register', registerSchema)
};
