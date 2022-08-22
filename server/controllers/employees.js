import EmployeeObject from "../models/employeeObject.js"

export const SearchEmployees = async (req, res) => { 
    const searchValue = req.body.searchValue ;  
    const searchExcludes = req.body.searchExcludes ? req.body.searchExcludes : [];  
    const searchTerms = req.body.searchTerms ? req.body.searchTerms : []; 
    if (searchTerms.length > 0 && searchTerms[1] === 'Name') {
        const searchResults = await EmployeeObject.find({ Name: { "$regex": searchValue, "$options": "i" }, _id: { $nin: searchExcludes } }).limit(searchTerms[0]).exec();
        try { 
            res.status(200).json(searchResults.sort((a, b) => a.Name.localeCompare(b.Name)));
        }
        catch (error) {
            res.status(409).json({message: error.message});
        }
    }
    if (searchTerms.length > 0 && searchTerms[1] === 'WorkTitle') {
        const searchResults = await EmployeeObject.find({ WorkTitle: { "$regex": searchValue, "$options": "i" }, _id: {$nin: searchExcludes} }).limit(searchTerms[0]).exec();
        try { 
            res.status(200).json(searchResults.sort((a, b) => a.WorkTitle.localeCompare(b.WorkTitle)));
        }
        catch (error) {
            res.status(409).json({message: error.message});
        }
    }
}

export const getEmployees =async (req, res) => {
    try { 
        const employeeObject = await EmployeeObject.find();
        return res.status(200).json(employeeObject); 
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const createEmployee = async (req, res) => { 
    const employee = req.body;  
    const newEmployee = new EmployeeObject(employee); 

    try { 
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}
export const deleteEmployee = async (req, res) => { 
    const employeeId = req.body._id;  
    try { 
        await EmployeeObject.deleteOne({ _id: employeeId }); 
        const employeeObject = await EmployeeObject.find();
        res.status(200).json(employeeObject);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}
