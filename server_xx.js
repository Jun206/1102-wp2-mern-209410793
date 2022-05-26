// CommonJS
// const express = require('express');

// ES6
import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors'

import morgan from 'morgan'

// db and authenticateUser
import connectDB_xx from './db/connect_xx.js';

// routes
import authRoutes_xx from './routes/authRoutes_xx.js';

// middleware
import notFoundMiddleware_xx from './middleware/not-found_xx.js';
import errorHandlerMiddleware_xx from './middleware/error-handler_xx.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  //   throw new Error('testing for error');
  res.send('Welcome -- htchung 123456789');
});

app.use('/api/v1/auth_xx', authRoutes_xx);

app.use(notFoundMiddleware_xx);
app.use(errorHandlerMiddleware_xx);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB_xx(process.env.MONGO_LOCAL_URL).then(() => {
      console.log('Connecting to MongoDB');
    });
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
