
// CommonJS
// const express = require('express');

// ES6
import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import connectDB_xx from './db/connect_xx.js'

app.get('/', (req, res) => {
    res.send('Welcome htchung 123456789');
});

const port = process.env.PORT || 5000;


const start = async () => {
    try{
        await connectDB_xx(process.env.MONGO_LOCAL_URL).then( () => {
            console.log('Connecting to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }catch(err){
        console.log(err);
    }

}

start();

