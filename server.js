import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

dotenv.config();
const app = express();

 await connectDB();

//app.use(express.json());
//app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));