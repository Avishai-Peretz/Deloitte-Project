import EmployeeObject from "../models/employeeObject.js"

export const SearchEmployees = async (req, res) => {
    const searchValue = req.body.searchValue? req.body.searchValue.replace( /[&\/\\#+()$~%'":*?<>{}]/g, '_' ) : '';
    const searchExcludes = req.body.searchExcludes ? req.body.searchExcludes : [];  
    const searchTerms = req.body.searchTerms ? req.body.searchTerms : []; 
    if (req.body.searchTerms && req.body.searchTerms[1] === 'Name') {
        const searchResults = await EmployeeObject.find({
            Name: { "$regex": searchValue, "$options": "i" }, _id: { $nin: searchExcludes },
            fields: {__v:0}
        }).limit(searchTerms[0]).exec();
        try { 
            res.status(200).json(searchResults.sort((a, b) => a.Name.localeCompare(b.Name)));
        }
        catch (error) {
            res.status(409).json({message: error.message});
        }
    }
    if (req.body.searchTerms && req.body.searchTerms[1] === 'WorkTitle') {
        try { 
            const searchResults = await EmployeeObject.find({ WorkTitle: { "$regex": searchValue, "$options": "i" }, _id: {$nin: searchExcludes} }).limit(searchTerms[0]).exec();
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
    if ( req.body.Name.length < 1) {return res.status(409).json({ message: "invalid Name" })}
    try { 
        const Name = req.body.Name.replace( /[&\/\\#,+()$~%'":*?<>{}]/g, ' ' )
        const WorkTitle = req.body.WorkTitle.replace( /[&\/\\#+()$~%'"*?<>{}]/g, ' ' )
        const ImageUrl = req.body.ImageUrl
        const employeeObject = { ImageUrl: ImageUrl, WorkTitle: WorkTitle, Name: Name }
        const newEmployee = new EmployeeObject(employeeObject); 
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}
export const deleteEmployee = async (req, res) => { 
    try { 
        const employeeId = req.body._id.replace( /[^ \w]+/g, ' ' );  
        await EmployeeObject.deleteOne({ _id: employeeId }); 
        const employeeObject = await EmployeeObject.find();
        res.status(200).json(employeeObject);
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
}
