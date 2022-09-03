export interface SearchEmployeesSchema {
    'SearchValue': string,
    'SearchExcludes': string[],
};

export interface SearchTerms {
    'resultsNum': number,
    'charsToStart': number 
    'timer'?: number,
};

export interface EmployeeData {
    "ImageUrl": string,
    "WorkTitle": string,
    "Name": string,
    "_id": string,
};

export interface Employees extends Array<EmployeeData> { };