import * as api from '../api';


export const getEmployees = () => async (dispatch) => {
    try { 
        const { data } = await api.fetchEmployees()
        dispatch({ type : 'FETCH_ALL', payload: data });
    } catch (error) { 
        throw new Error(error.message);
    }
}

export const createEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.createEmployee(employee)

        dispatch({ type : 'CREATE', payload: data });
    } catch (error) {
        throw new Error(error.message);
    }
}
export const deleteEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.deleteEmployee(employee)
        dispatch({ type : 'DELETE', payload: data });
    } catch (error) {
        throw new Error(error.message);
    }
}


export const searchEmployees = ({ searchValue, searchTerms }) => async (dispatch) => {
    const sortInputFirst = (input, data) => {
        let first = [];
        let others = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].Name.toLowerCase().indexOf(input.toLowerCase()) === 0) {
                first.push(data[i]);
            }
            else {
                others.push(data[i]);
            }
        }
        first.sort();
        others.sort();
        return(first.concat(others));
    }
    try {
        if (localStorage.getItem('searchResults')) {
            const localData = await JSON.parse(localStorage.getItem('searchResults'))       
            let filterFromLocal = []
            if (searchTerms[1] === 'Name') {
                filterFromLocal = localData.filter(employee => employee.Name.toLowerCase().includes(searchValue.toLowerCase()))                   
            }
            if (searchTerms[1] === 'WorkTitle') {
                filterFromLocal = localData.filter(employee => employee.WorkTitle.toLowerCase().includes(searchValue.toLowerCase()))
            }
            const a = sortInputFirst(searchValue, filterFromLocal );
            const filterFromLocalId = filterFromLocal.map(employee => employee._id)   
            dispatch({ type: 'SEARCH', payload: [...a] });             
            if (searchValue.length > 1) {
                const { data } = await api.searchEmployees({ searchValue: searchValue, searchExcludes: filterFromLocalId, searchTerms: searchTerms});
                const resultsData = [...a,...data]
                dispatch({ type: 'SEARCH', payload: resultsData});
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
        throw new Error(error.message);
    }
 }