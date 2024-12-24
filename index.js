const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const addUser =require('./routes/addUser');
require('dotenv').config();


const uri =process.env.MONGODB_URI ;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
app.use(express.json());
app.use('/api', addUser);

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});