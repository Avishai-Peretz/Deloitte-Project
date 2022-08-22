import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import corse from 'cors';
import postEmployees from './routes/employees.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(corse());
app.use('/employees', postEmployees);

const CONNECTION_URL = "mongodb+srv://Avicii:aviShai1@myfirstcluster.4advp.mongodb.net/Deloitte?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3002;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));
// mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloude/atlas