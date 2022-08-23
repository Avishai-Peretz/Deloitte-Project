import axios from 'axios';

const URI = (() => { if (process.env.NODE_ENV === "production") { return "/employees"; } else { return "http://localhost:3002/employees"; } })()

export const fetchEmployees = () => axios.get(URI);

export const createEmployee = (newEmployee) => axios.post(URI, newEmployee);

export const deleteEmployee = (employeeId) => axios.post(URI + '/delete', employeeId);

export const searchEmployees = (searchObject) => axios.post(URI+'/search', searchObject);