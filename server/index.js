const dotent = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
dotent.config();

const authRoute = require('./routes').auth;

// npx nodemon server以启动服务器
// 这里主要是云端不是mongodb，而是mongodb atlas，所以需要用到mongodb+srv://
const uri = 'mongodb+srv://mitchellzhang0527:<Tht950718>@mitchdatabase.hlbvmps.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  await mongoose.connect(uri, {
    // authSouce: 'admin',
    user: 'mitchellzhang0527',
    pass: 'Tht950718',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    () => console.log('Connected to MongoDB'),
  )
    .catch((err) => {
      console.log(err);
    });
}

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', authRoute);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
