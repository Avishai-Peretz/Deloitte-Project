import Terms from "../models/termsObject.js";

export const editTerms = async (req, res) => {
    try {
        const searchTerms = {
            searchBy: req.body.searchBy ? req.body.searchBy : 'Name',
            resultsNum: req.body.resultsNum ? req.body.resultsNum : 20,
            charsToStart: req.body.charsToStart ? req.body.charsToStart : 1
        }
        await Terms.findOneAndUpdate({}, searchTerms);
        const terms = await Terms.find();
        res.status(200).json(terms);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getTerms = async (req, res) => {
    try {
       const terms =await Terms.find()
       return res.status(200).json(terms);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}