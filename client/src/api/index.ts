import axios, { AxiosResponse } from 'axios';
import { DeleteEmployeeData, EmployeeData, Employees, SearchEmployeesSchema } from '../types';

const URI = (():string => { if (process.env.NODE_ENV === "production") { return "/employees"; } else { return "http://localhost:3002/employees"; } })()

export const fetchEmployees = ():Promise<AxiosResponse<Employees, any>> => axios.get<Employees>(URI);

export const createEmployee = (newEmployee: EmployeeData):Promise<AxiosResponse<EmployeeData, any>> =>
    axios.post<EmployeeData>(URI, newEmployee);

export const deleteEmployee = (employeeId: DeleteEmployeeData):Promise<AxiosResponse<EmployeeData, any>> =>
    axios.post<EmployeeData>(URI + '/delete', employeeId);

export const searchEmployees = (searchObject: SearchEmployeesSchema):Promise<AxiosResponse<Employees, any>> =>
    axios.post<Employees>(URI + '/search', searchObject);