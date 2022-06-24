
//Common JS
// const express = require ('express');

import express from 'express'; 

const app = express();

import dotnev from 'dotenv';
dotnev.config();

import connectDB_93 from './db/connect_93.js';

app.get('/', (req, res)=> {
    res.send('Welcome JunKai Huang 209410793');
});

const port = process.env.PORT || 5000;

const start = async () => {
    try{
        await connectDB_93(process.env.MONGO_LOCAL_URL).then( () => {
            console.log('Connecting to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    }catch(err){
        console.log(err);
    }
}

start();

