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
        console.log(action.payload)    
            return action.payload;   
        default: 
            return searchResult;            
    }
}