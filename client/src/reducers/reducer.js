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

// export const searchValue = (searchValue = "", action) => {
//     switch (action.type)  {        
//         case 'SEARCH_VALUE':        
//             return action.payload;             
//         default: 
//             return searchValue;            
//     }
// }
export const autocomplete = (autocomplete = { bool: false, value: "", index: -1 }, action) => {
    switch (action.type) {   
        case 'SEARCH_VALUE':        
        return action.payload;
        case 'AUTOCOMPLETE_CLICK':      
            return action.payload; 
        case 'AUTOCOMPLETE_HOVER':      
            return action.payload;
        case 'INPUT_VALUE':        
            return action.payload; 
        default: 
            return autocomplete;            
    }
}

export const autocompleteKey = (autocompleteKey = 0 , action) => {
    switch (action.type) {
        case 'ARROW_UP':
            return autocompleteKey !== 0 ? autocompleteKey - 1 : globalResults.length - 1;
        case 'ARROW_DOWN':
            return autocompleteKey !== globalResults.length - 1 ? autocompleteKey + 1 : 0;
        case 'SELECT_KEY':       
            return action.payload ;       
        case 'ENTER':
            return action.payload ;       
        default:
            return autocompleteKey
    }
};