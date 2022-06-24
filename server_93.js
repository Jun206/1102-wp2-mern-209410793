// CommonJS
// const express = require('express');

// ES6
import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';

import morgan from 'morgan';
// import cors from 'cors';

// db and authenticateUser
import connectDB_93 from './db/connect_93.js';

// routes
import authRoutes_93 from './routes/authRoutes_93.js';

// middleware
import notFoundMiddleware_93 from './middleware/not-found_93.js';
import errorHandlerMiddleware_93 from './middleware/error-handler_93.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  //   throw new Error('testing for error');
  // res.send('Welcome -- htchung 123456789');
  res.json({ msg: 'Welcome -- htchung 123456789' });
});

app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API v1 -- htchung 123456789' });
});

app.use('/api/v1/auth_93', authRoutes_93);

app.use(notFoundMiddleware_93);
app.use(errorHandlerMiddleware_93);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_93(process.env.MONGO_LOCAL_URL).then(() => {
      console.log('Connecting to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
