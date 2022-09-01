import mongoose from "mongoose";

const searchSchema = mongoose.Schema({
    field: "Name" | "WorkTitle" | "Name&WorkTitle",
    resultsNum: Number,
    charsToStart: Number
})

const Terms = mongoose.model('Terms', searchSchema);

export default Terms;