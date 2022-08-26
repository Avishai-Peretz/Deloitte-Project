import * as api from '../api';
import { useEffect, useState } from "react";
import { getFilterByValue, getFilterFromLocal, sortInputFirst } from './utils';


export const getEmployees = () => async (dispatch) => {
    try { const { data } = await api.fetchEmployees(); dispatch({ type : 'FETCH_ALL', payload: data });
    } catch ( error ) { throw new Error( error ); }
}

export const createEmployee = ( employee ) => async ( dispatch ) => {
    try {
        const { data } = await api.createEmployee(employee);
        dispatch({ type: 'CREATE', payload: data });
        alert( "Employee created successfully." );
    }
    catch (error) {
        alert( "Unable to create employee. NOTE: Name and Work title must contain at least two characters." );
        throw new Error(error);
    }
}

export const deleteEmployee = (employee) => async (dispatch) => {
    try {
        const { data } = await api.deleteEmployee(employee);
        dispatch({ type: 'DELETE', payload: data });
        alert( "Employee deleted successfully." );
    }
    catch (error) {
        alert( "Unable to delete employee, Try to validate the Id, you can use the autocomplete in order to do so." );
        throw new Error(error);
    }
}

export const searchEmployees = ({ searchValue = "", searchTerms = [], click = false }) => async (dispatch) => {
    const filteredValue = searchValue ? searchValue.replace( /[&\/\\#,+()$~%'":*?<>{}]/g, '_' ) : "";
    try { 
        if (localStorage.getItem( 'searchResults' )) {
            const localData = await JSON.parse(localStorage.getItem('searchResults'))       
            let filterFromLocal = []
            if (searchTerms[1] === 'Name') { filterFromLocal = getFilterByValue(localData, 'Name' ,filteredValue) }
            if (searchTerms[1] === 'WorkTitle') { filterFromLocal = getFilterByValue(localData, localData.WorkTitle, filteredValue) }
            const sortedFromLocal = sortInputFirst( filteredValue, filterFromLocal );
            const filterFromLocalId = filterFromLocal.map( employee => employee._id );   
            dispatch( { type: 'SEARCH', payload: [...sortedFromLocal] } );             
            if (filteredValue.length > 1 || (click === true && filteredValue.length > 0)) {
                const { data } = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: filterFromLocalId, searchTerms: searchTerms});
                const resultsData = [ ...sortedFromLocal,...data ]
                dispatch( { type: 'SEARCH', payload: resultsData} );
                const stringifyData =JSON.stringify( [ ...localData,...data ] );
                localStorage.setItem( 'searchResults', stringifyData )
            }
        } else if (filteredValue.length > 1 || click === true ) { 
            console.log(filteredValue)
            const { data } = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: [], searchTerms: searchTerms });
            const sortedData = sortInputFirst( filteredValue, data );
                dispatch( { type: 'SEARCH', payload: [...sortedData] } );
                const stringifyData =JSON.stringify( [ ...sortedData ] );
                localStorage.setItem( 'searchResults', stringifyData )
        }
    }
    catch (error) { throw new Error(error); }
}


export const setObjectID = (autocomplete) => async (dispatch) => { dispatch({ type: 'ID', payload: autocomplete }) }
export const setSearchValue = (searchValue) => async (dispatch) => { dispatch({ type: 'SEARCH_VALUE', payload: searchValue }) }
export const setSearchField = (terms) => async (dispatch) => {dispatch({ type: 'SEARCH_FIELD', payload: terms }) }
export const autocompleteClick = (autocomplete) => async (dispatch) => { dispatch({ type: 'AUTOCOMPLETE_CLICK', payload: autocomplete }) }
export const autocompleteHover = (autocomplete) => async (dispatch) => { dispatch({ type: 'AUTOCOMPLETE_HOVER', payload:  autocomplete }) }
 
export const useKeyNavigation = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
    useEffect(
        () => {
            const downHandler = (e) => { if (e.key === targetKey) { e.preventDefault(); setKeyPressed(true); }};
            const upHandler = (e) => { if (e.key === targetKey) { e.preventDefault(); setKeyPressed(false); } };
            window.addEventListener('keydown', downHandler) ;window.addEventListener('keyup', upHandler);
            return () => { window.removeEventListener('keydown', downHandler); window.removeEventListener('keyup', upHandler); };
        }, [targetKey]);
    return keyPressed;
};