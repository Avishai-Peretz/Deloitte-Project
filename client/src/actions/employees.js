import * as api from '../api';


export const getEmployees = () => async (dispatch) => {
    try { 
        const { data } = await api.fetchEmployees()
        dispatch({ type : 'FETCH_ALL', payload: data });
    } catch (error) { 
        console.log(error.message)
    }
}

export const createEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee)

        dispatch({ type : 'CREATE', payload: data });
    } catch (error) {
        console.log(error)
    }
}
export const deleteEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.deleteEmployee(employee)
        dispatch({ type : 'DELETE', payload: data });
    } catch (error) {
        console.log(error)
    }
}


export const searchEmployees = ({searchValue, searchTerms}) => async (dispatch) => {
    try {
        if (localStorage.getItem('searchResults')) {
            const localData = await JSON.parse(localStorage.getItem('searchResults'));       
            let filterFromLocal = []
            if (searchTerms[1] === 'Name') {
                filterFromLocal = localData.filter(employee => employee.Name.toLowerCase().includes(searchValue.toLowerCase()));
            }
            if (searchTerms[1] === 'WorkTitle') {
                filterFromLocal = localData.filter(employee => employee.WorkTitle.toLowerCase().includes(searchValue.toLowerCase()));
            }
            const filterFromLocalId = filterFromLocal.map(employee => employee._id)   
            dispatch({ type: 'SEARCH', payload: [...filterFromLocal] });                              
            if ( searchValue.length > 0) {
                const { data } = await api.searchEmployees({ searchValue: searchValue, searchExcludes: filterFromLocalId, searchTerms: searchTerms});
                dispatch({ type: 'SEARCH', payload: [...filterFromLocal,...data] });
                const stringifyData =JSON.stringify([...localData,...data]);
                localStorage.setItem('searchResults', stringifyData)
            }
        } else {
                const { data } = await api.searchEmployees({ searchValue: searchValue, searchExcludes: [], searchTerms: searchTerms });
                dispatch({ type: 'SEARCH', payload: [...data] });
                const stringifyData =JSON.stringify([...data]);
                localStorage.setItem('searchResults', stringifyData)
        }
        
    } catch (error) {
        console.log(error)
    }
 }