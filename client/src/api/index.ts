import axios from 'axios';
import { DeleteEmployeeData, EmployeeData, Employees, SearchEmployeesSchema } from '../interfaces/test';

const URI = (() => { if (process.env.NODE_ENV === "production") { return "/employees"; } else { return "http://localhost:3002/employees"; } })()

export const fetchEmployees = () => axios.get(URI);

export const createEmployee = (newEmployee: EmployeeData) => axios.post(URI, newEmployee);

export const deleteEmployee = (employeeId:DeleteEmployeeData) => axios.post(URI + '/delete', employeeId);

export const searchEmployees = (searchObject:SearchEmployeesSchema) => axios.post(URI+'/search', searchObject);