import express from 'express';
import bodyParser from 'body-parser';
import corse from 'cors';
import postEmployees from './routes/employees.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

export const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(corse());
app.use('/employees', postEmployees);

const CONNECTION_URL = process.env.NODE_ENV_CONNECTION_URL 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
