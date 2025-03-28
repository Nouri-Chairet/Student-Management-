const express = require('express');
const mongoose = require('mongoose');
const addUser =require('./routes/addUser');
const getAllUsers = require('./routes/allUsers');

const cors = require('cors');

const app = express();
const port = 3000;
require('dotenv').config();


const uri =process.env.MONGODB_URI ;
app.use(cors());

mongoose.connect(uri)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());


app.use('/api', addUser);
app.use('/api', getAllUsers);

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});