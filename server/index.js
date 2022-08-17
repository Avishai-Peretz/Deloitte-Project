import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import corse from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use(corse());
app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://Avicii:aviShai1@myfirstcluster.4advp.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));
// mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloude/atlas