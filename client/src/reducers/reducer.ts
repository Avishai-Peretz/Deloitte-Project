import {globalResults} from "../components/Employees/EmployeesList";
import { Autocomplete, Employees, SearchTerms } from "../types";


export const employees = (employees:Employees = [], action: any) => {
    switch (action.type)  {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...employees, action.payload];
        case 'DELETE':
            return action.payload;
        default: 
            return employees;            
    }
}
export const searchResult = (searchResult:Employees = [], action:any) => {
    switch (action.type)  {        
        case 'SEARCH':          
            return action.payload;   
        default: 
            return searchResult;            
    }
}

export const autocomplete = (autocomplete:Autocomplete = { bool: false, value: "", index: -1}, action:any) => {
    switch (action.type) {   
        case 'SEARCH_VALUE':        
            return action.payload; 
        default: 
            return autocomplete;            
    }
}
export const searchTerms = (searchTerms: SearchTerms = { resultsNum: 20, charsToStart: 2 }, action:any) => {
    switch (action.type) {   
        case 'RESULTS_NUM':
            return { ...searchTerms, resultsNum: action.payload }; 
        case 'CHARTS':
            return { ...searchTerms, charsToStart: action.payload }; 
        default: 
            return searchTerms;            
    }
}

export const autocompleteKey = (autocompleteKey:number | null = null , action:any) => {
    switch (action.type) {
        case 'ARROW_UP':
            if (autocompleteKey === null) { return 0 }
            else if (autocompleteKey !== 0) { return autocompleteKey - 1 }
            else {return globalResults.length - 1;}
        case 'ARROW_DOWN':
            if (autocompleteKey === null || autocompleteKey === globalResults.length - 1 ) { return 0}
            else if (autocompleteKey !== globalResults.length) { return autocompleteKey + 1 }
            else {return 0}
        case 'SELECT_KEY':       
            return action.payload ;       
        case 'ENTER':
            return action.payload ;       
        default:
            return autocompleteKey
    }
};