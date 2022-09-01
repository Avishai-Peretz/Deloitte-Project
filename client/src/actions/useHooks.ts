import * as api from '../api';
import { useEffect, useState } from "react";
import { getFilterByValue, sortInputFirst } from './utils';
import { DeleteEmployeeData, EmployeeData, Employees, SearchEmployees, SearchTerms } from '../types';
import { RootState } from '../reducers';
import { useSelector } from 'react-redux';


export const getEmployees = () => async (dispatch: RootState) => {
    try {
        const { data }  : {data: Employees} = await api.fetchEmployees();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch ( error: any ) { throw new Error( error ); }
}

export const createEmployee = ( employee: EmployeeData) => async ( dispatch: RootState) => {
    try {
        const { data } : {data: EmployeeData} = await api.createEmployee(employee);
        dispatch({ type: 'CREATE', payload: data });
        alert( "Employee created successfully." );
    }
    catch (error: any) {
        alert( "Unable to create employee. NOTE: Name and Work title must contain at least two characters." );
        throw new Error(error);
    }
}

export const deleteEmployee = (employee:DeleteEmployeeData) => async (dispatch: RootState) => {
    try {
        const { data } : {data: EmployeeData} = await api.deleteEmployee(employee);
        dispatch({ type: 'DELETE', payload: data });
        alert( "Employee deleted successfully." );
    }
    catch (error:any) {
        alert( "Unable to delete employee, Try to validate the Id, you can use the autocomplete in order to do so." );
        throw new Error(error);
    }
}

export const searchEmployees = ({ searchValue = "", click = false, charsToStart = 1 }:SearchEmployees) => async (dispatch: RootState) => {
    const filteredValue: string = searchValue ? searchValue : "";
    try { 
        if (localStorage.getItem( 'searchResults' )) {
            const localData = await JSON.parse( localStorage.getItem('searchResults') || "")       
            const filterFromLocal:Employees = getFilterByValue(localData, filteredValue)
            const sortedFromLocal = sortInputFirst( filteredValue, filterFromLocal);
            dispatch(  { type: 'SEARCH', payload: [...sortedFromLocal] } );             
            if (filteredValue.length >= charsToStart || (click === true && filteredValue.length > 0)) {
                const filterFromLocalId = filterFromLocal.map((employee:{_id: string}) => employee._id);
                const { data }: { data:Employees} = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: filterFromLocalId });
                const resultsData = [ ...sortedFromLocal,...data ]
                dispatch( { type: 'SEARCH', payload: resultsData} );
                const stringifyData =JSON.stringify( [ ...localData,...data ] );
                localStorage.setItem( 'searchResults', stringifyData )
            }
        } else if (filteredValue.length >= charsToStart || click === true ) {
            const { data }: { data:Employees} = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: []});
            const sortedData = sortInputFirst( filteredValue, data);
                dispatch( { type: 'SEARCH', payload: [...sortedData] } );
                const stringifyData =JSON.stringify( [ ...sortedData ] );
                localStorage.setItem( 'searchResults', stringifyData )
        }
    }
    catch (error:any) { throw new Error(error); }
}

export const setSearchValue = (searchValue: { value?: string, ID: string }) => async (dispatch: RootState) => {
    const filteredValue = searchValue.value ? searchValue.value : "";
    const setForDispatch = { value: filteredValue, ID: searchValue.ID }
    dispatch({ type: 'SEARCH_VALUE', payload: setForDispatch })
};

export const setSearchResultsNum = (resultsNum: number) => async (dispatch: RootState) => { dispatch({ type: 'RESULTS_NUM', payload: resultsNum }) };
export const setSearchCharsToStart = (charsToStart: number) => async (dispatch: RootState) => { dispatch({ type: 'CHARTS', payload: charsToStart }) };
 
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