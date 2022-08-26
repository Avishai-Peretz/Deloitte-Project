import {globalResults} from "../components/Employees/Employees";

export const employees = (employees = [], action) => {
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
export const searchResult = (searchResult = [], action) => {
    switch (action.type)  {        
        case 'SEARCH':          
            return action.payload;   
        default: 
            return searchResult;            
    }
}

export const autocomplete = (autocomplete = { bool: false, value: "", index: -1, objectId: null }, action) => {
    switch (action.type) {   
        case 'SEARCH_VALUE':        
            return action.payload;
        case 'AUTOCOMPLETE_CLICK':      
            return action.payload; 
        case 'AUTOCOMPLETE_HOVER':      
            return action.payload;
        case 'INPUT_VALUE':        
            return action.payload; 
        case 'ID':
            return action.payload; 
        default: 
            return autocomplete;            
    }
}
export const searchTerms = (searchTerms = { field: String('Name'), resultsNum: 20 }, action) => {
    switch (action.type) {   
        case 'SEARCH_FIELD':        
        return { ...searchTerms, field : action.payload }; 
        case 'RESULTS_NUM':
            return { ...searchTerms, resultsNum: action.payload }; 
        default: 
            return searchTerms;            
    }
}

export const autocompleteKey = (autocompleteKey = null , action) => {
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