import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    ImageUrl: String,
    WorkTitle: String,
    Name: String,
})

const EmployeeObject = mongoose.model('Employee', employeeSchema);

export default EmployeeObject;