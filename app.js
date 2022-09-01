import express from 'express';
import bodyParser from 'body-parser';
import corse from 'cors';
import postEmployees from './routes/employees.js';
import searchTerms from './routes/terms.js';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import Terms from './models/termsObject.js';
dotenv.config();

export const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(corse());
app.use('/terms', searchTerms);
app.use('/employees', postEmployees);
(async () => {
    if ((await Terms.find()).length < 1) {
        const terms = {
            searchBy:  "Name&WorkTitle",
            resultsNum: 20,
            charsToStart: 1
        }
        const setTerms = new Terms(terms);
        await setTerms.save();
    }
})()


const CONNECTION_URL = process.env.NODE_ENV_CONNECTION_URL 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
