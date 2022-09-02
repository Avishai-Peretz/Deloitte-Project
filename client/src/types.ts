export interface EmployeeData {
    "ImageUrl": string,
    "WorkTitle": string,
    "Name": string,
    "_id": string,
};
export enum DefaultEmployeeData {
    ImageUrl= "",
    WorkTitle= "",
    Name= "",
    _id= ""
}
export interface Employees extends Array<EmployeeData> { };

export interface DeleteEmployeeData { "_id": string };

export interface Autocomplete {
    'value'?: string,
    'ID'?: number | null,
};

export interface SearchTerms {
    'resultsNum': number,
    'charsToStart': number 
    'timer'?: number,
};


export interface SearchEmployees {
    'charsToStart'?: SearchTerms['charsToStart'],
    'searchValue': Autocomplete['value'],
    'click': boolean
    'time':number,
};

export interface DefaultSearchEmployees { 
    searchValue: "",
    click: boolean | false,
    charsToStart: DefaultNumbers.charsToStart,
    time: DefaultNumbers.timer,
};

export interface SearchValue {
    'value': string,
    'ID': string
};
export enum DefaultSearchValue {
    value = "",
    ID = "",
};

export interface SearchEmployeesSchema {
    'searchValue': string,
    'searchExcludes': string[],
};


export type Props = {
    "page"?: Pages.admin | Pages.home | Pages.searchResults,
    "employee"?: EmployeeData,
    "index"?: number,
    "enterPress"?: boolean
}

export type Timer = NodeJS.Timeout | number | undefined;

export enum DefaultNumbers {
    resultsNum = 20,
    charsToStart = 2,
    timer =  1000,
}

export enum Pages { 
    home = 'home',
    searchResults = 'searchResults',
    admin = 'admin'
}

export enum DefaultStrings {
    localName = 'searchResults',
    createdMSG = 'Employee created successfully.',
    unableToCreateMSG = 'Unable to create employee. NOTE: Name and Work title must contain at least two characters.',
    deletedMSG = 'Employee deleted successfully.',
    unableToDeletedMSG = 'Unable to delete employee, Try to validate the Id, you can use the autocomplete in order to do so.',
    leaveToAdmin = 'Are you sure you want to go to Admin(testing) page?'
}


export enum HTMLTitles {
    homeMain = 'LOOKING FOR AN EMPLOYEE?',
    homeSecondary = 'Click on the search bar to learn our suggestions',
    resultsMain = 'Search Results'
}

export enum Keys {
    navUp = 'ArrowUp',
    navDown = 'ArrowDown',
    navSelect = 'Enter'
}

export enum Routes {
    localhost = 'http://localhost:3002',
    production = 'production',
    employees = '/employees',
    terms = '/terms',
    delete = '/delete',
    search = '/search',
    searchResults = '/search-results',
    admin = '/admin',
}


  