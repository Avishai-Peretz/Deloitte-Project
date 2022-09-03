import EmployeeObject from "../models/employeeObject.js"
import Terms from "../models/termsObject.js";

export const SearchEmployees = async (req, res) => {
    const searchExcludes = req.body.searchExcludes ? req.body.searchExcludes : [];
    const searchTerms = await Terms.findOne()
    const filteredSearchValue = req.body.searchValue ? req.body.searchValue.replace(/[&\/\\#+()$~%'":*?<>{}]/g, '').replace(/[.]/g, '\\.'): '';
    try {
        const searchResults = await EmployeeObject.find({
            $or: [
                { 'Name': { "$regex": filteredSearchValue, "$options": "i" } },
                { 'WorkTitle': { "$regex": filteredSearchValue, "$options": "i" } }
            ],
            _id: { $nin: searchExcludes },
            fields: { __v: 0 }
        }).limit(searchTerms.resultsNum).exec();
        res.status(200).json(searchResults.sort((a, b) => a.WorkTitle.localeCompare(b.WorkTitle)));
        }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEmployees = async (req, res) => {
    try {
        const employeeObject = await EmployeeObject.find();
        return res.status(200).json(employeeObject);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createEmployee = async (req, res) => {
    if (req.body.Name.length < 1) { return res.status(409).json({ message: "invalid Name" }) }
    try {
        const Name = req.body.Name.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, ' ')
        const WorkTitle = req.body.WorkTitle.replace(/[&\/\\#+()$~%'"*?<>{}]/g, ' ')
        const ImageUrl = req.body.ImageUrl
        const employeeObject = { ImageUrl: ImageUrl, WorkTitle: WorkTitle, Name: Name }
        const newEmployee = new EmployeeObject(employeeObject);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.body._id.replace(/[^ \w]+/g, ' ');
        await EmployeeObject.deleteOne({ _id: employeeId });
        const employeeObject = await EmployeeObject.find();
        res.status(200).json(employeeObject);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}