export interface EmployeeData {
    "ImageUrl": string,
    "WorkTitle": string,
    "Name": string,
    "_id": string,
};

export interface Employees extends Array<EmployeeData> { };

export interface DeleteEmployeeData { "_id": string };

export interface Autocomplete {
    'bool'?: boolean,
    'value'?: string,
    'index'?: number | null
};

export interface SearchTerms {
    'field': string,
    'resultsNum': number | null
};

export interface Terms {
    [0]: number,
    [1]: string
};

export interface SearchEmployees {
    'searchValue': string,
    'searchTerms'?: Terms,
    'click': boolean
};

export interface SearchValue {
    'value': string,
    'ID': string
};

export interface SearchEmployeesSchema {
    'searchValue': string,
    'searchExcludes': string[],
    'searchTerms': Terms
};

export type Props = {
    "page"?: 'admin' | 'home' | 'searchResults',
    "employee"?: EmployeeData,
    "index"?: number,
    "enterPress"?: boolean
}