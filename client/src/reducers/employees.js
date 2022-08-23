
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

export const searchValue = (searchValue = "", action) => {
    switch (action.type)  {        
        case 'SEARCH-VALUE':        
            return action.payload;             
        default: 
            return searchValue;            
    }
}
export const autocompleteClick = (autocomplete = [], action) => {
    switch (action.type)  {        
        case 'AUTOCOMPLETE_CLICK':      
            return action.payload;            
        default: 
            return autocomplete;            
    }
}
export const autocompleteHover = (autocomplete = [], action) => {
    switch (action.type)  {        
        case 'AUTOCOMPLETE_HOVER':      
            return action.payload;             
        default: 
            return autocomplete;            
    }
}
