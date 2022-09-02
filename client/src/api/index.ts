import axios, { AxiosResponse } from 'axios';
import { Routes, DeleteEmployeeData, EmployeeData, Employees, SearchEmployeesSchema, SearchTerms } from '../types';

const employeesURI = ((): string => {
    if (process.env.NODE_ENV === Routes.production) { return Routes.employees; } else { return Routes.localhost + Routes.employees; }
})()
export const termsURI = ((): string => {
    if (process.env.NODE_ENV === Routes.production) { return Routes.terms; } else { return Routes.localhost + Routes.terms; }
})()

export const fetchEmployees = ():Promise<AxiosResponse<Employees, any>> => axios.get<Employees>(employeesURI);

export const createEmployee = (newEmployee: EmployeeData):Promise<AxiosResponse<EmployeeData, any>> =>
    axios.post<EmployeeData>(employeesURI, newEmployee);

export const deleteEmployee = (employeeId: DeleteEmployeeData):Promise<AxiosResponse<EmployeeData, any>> =>
    axios.post<EmployeeData>(employeesURI + Routes.delete, employeeId);

export const searchEmployees = (searchObject: SearchEmployeesSchema):Promise<AxiosResponse<Employees, any>> =>
    axios.post<Employees>(employeesURI + Routes.search, searchObject);

export const getTerms = ():Promise<AxiosResponse<SearchTerms, any>> => axios.get<SearchTerms>(termsURI);