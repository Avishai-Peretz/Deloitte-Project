export interface EmployeeData {
    "ImageUrl": string,
    "WorkTitle": string,
    "Name": string,
    "_id": string,
};

export interface Employees extends Array<EmployeeData> { };

export interface DeleteEmployeeData { "_id": string };

export interface Autocomplete {
    'value'?: string,
    'ID'?: number | null,
};

export interface SearchTerms {
    'resultsNum': number,
    'charsToStart': number 
};


export interface SearchEmployees {
    'charsToStart'?: SearchTerms['charsToStart'],
    'searchValue': Autocomplete['value'],
    'click': boolean
};

export interface SearchValue {
    'value': string,
    'ID': string
};

export interface SearchEmployeesSchema {
    'searchValue': string,
    'searchExcludes': string[],
};

export type Props = {
    "page"?: 'admin' | 'home' | 'searchResults',
    "employee"?: EmployeeData,
    "index"?: number,
    "enterPress"?: boolean
}

export enum Default {
    resultsNum = 20,
    charsToStart = 2,
}