import axios from 'axios';

const url = 'http://localhost:3002/employees';

export const fetchEmployees = () => axios.get(url);

export const createEmployee = (newEmployee) => axios.post(url, newEmployee);

export const deleteEmployee = (employeeId) => axios.post(url + '/delete', employeeId);

export const searchEmployees = (searchObject) => axios.post(url+'/search', searchObject);