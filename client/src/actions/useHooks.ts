import * as api from '../api';
import { useEffect, useState } from "react";
import { getFilterByValue, sortInputFirst } from './utils';
import { DeleteEmployeeData, EmployeeData, Employees, SearchEmployees } from '../interfaces/test';
import { AnyAction } from 'redux';


export const getEmployees = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchEmployees();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch ( error: any ) { throw new Error( error ); }
}

export const createEmployee = ( employee: any) => async ( dispatch:AnyAction|any) => {
    try {
        const { data } = await api.createEmployee(employee);
        dispatch({ type: 'CREATE', payload: data });
        alert( "Employee created successfully." );
    }
    catch (error:any) {
        alert( "Unable to create employee. NOTE: Name and Work title must contain at least two characters." );
        throw new Error(error);
    }
}

export const deleteEmployee = (employee:DeleteEmployeeData) => async (dispatch:any) => {
    try {
        const { data } = await api.deleteEmployee(employee);
        dispatch({ type: 'DELETE', payload: data });
        alert( "Employee deleted successfully." );
    }
    catch (error:any) {
        alert( "Unable to delete employee, Try to validate the Id, you can use the autocomplete in order to do so." );
        throw new Error(error);
    }
}

export const searchEmployees = ({ searchValue = "", searchTerms = [20,"Name"], click = false }:SearchEmployees) => async (dispatch: any) => {
    const filteredValue: string = searchValue ? searchValue.replace( /[&\/\\#,+()$~%'":*?<>{}]/g, '_' ) : "";
    try { 
        if (localStorage.getItem( 'searchResults' )) {
            const localData = await JSON.parse( localStorage.getItem('searchResults') || "")       
            let filterFromLocal:Employees = [] 
            if (searchTerms[1] === 'Name') { filterFromLocal = getFilterByValue(localData, 'Name' ,filteredValue) }
            if (searchTerms[1] === 'WorkTitle') { filterFromLocal = getFilterByValue(localData, 'WorkTitle', filteredValue) }
            const sortedFromLocal = sortInputFirst( filteredValue, filterFromLocal, searchTerms[1] );
            const filterFromLocalId = filterFromLocal.map((employee:{_id: string}) => employee._id);
            dispatch(  { type: 'SEARCH', payload: [...sortedFromLocal] } );             
            if (filteredValue.length > 1 || (click === true && filteredValue.length > 0)) {
                const { data } = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: filterFromLocalId, searchTerms: searchTerms});
                const resultsData = [ ...sortedFromLocal,...data ]
                dispatch( { type: 'SEARCH', payload: resultsData} );
                const stringifyData =JSON.stringify( [ ...localData,...data ] );
                localStorage.setItem( 'searchResults', stringifyData )
            }
        } else if (filteredValue.length > 1 || click === true ) {
            const { data } = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: [], searchTerms: searchTerms });
            const sortedData = sortInputFirst( filteredValue, data, searchTerms[1] );
                dispatch( { type: 'SEARCH', payload: [...sortedData] } );
                const stringifyData =JSON.stringify( [ ...sortedData ] );
                localStorage.setItem( 'searchResults', stringifyData )
        }
    }
    catch (error:any) { throw new Error(error); }
}

export const setSearchValue = (searchValue:{ value: string, ID: string }) => async (dispatch:any) => { dispatch({ type: 'SEARCH_VALUE', payload: searchValue }) }
export const setSearchField = (terms:string) => async (dispatch:any) => {dispatch({ type: 'SEARCH_FIELD', payload: terms }) }
export const setSearchResultsNum = (resultsNum:number) => async (dispatch:any) => {dispatch({ type: 'RESULTS_NUM', payload: resultsNum }) }
export const autocompleteClick = (autocomplete:object) => async (dispatch:any) => { dispatch({ type: 'AUTOCOMPLETE_CLICK', payload: autocomplete }) }
export const autocompleteHover = (autocomplete:object) => async (dispatch:any) => { dispatch({ type: 'AUTOCOMPLETE_HOVER', payload:  autocomplete }) }
 
export const useKeyNavigation = (targetKey:string) => {
    const [keyPressed, setKeyPressed] = useState(false);
    useEffect(
        () => {
            const downHandler = (e:KeyboardEvent) => { if (e.key === targetKey) { e.preventDefault(); setKeyPressed(true); }};
            const upHandler = (e:KeyboardEvent) => { if (e.key === targetKey) { e.preventDefault(); setKeyPressed(false); } };
            window.addEventListener('keydown', downHandler) ;window.addEventListener('keyup', upHandler);
            return () => { window.removeEventListener('keydown', downHandler); window.removeEventListener('keyup', upHandler); };
        }, [targetKey]);
    return keyPressed;
};