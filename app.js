import express from 'express';
import corse from 'cors';
import employees from './routes/employees.js';
import searchTerms from './routes/terms.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

export const app = express();
app.use(express.json({ limit: "30mb" }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(corse());
app.use('/terms', searchTerms);
app.use('/employees', employees);


const CONNECTION_URL = process.env.NODE_ENV_CONNECTION_URL 
mongoose.connect(CONNECTION_URL)

