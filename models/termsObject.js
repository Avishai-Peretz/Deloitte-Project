import mongoose from "mongoose";

const searchSchema = mongoose.Schema({
    resultsNum: Number,
    charsToStart: Number
})

const Terms = mongoose.model('Terms', searchSchema);

export default Terms;