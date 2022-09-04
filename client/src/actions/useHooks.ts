import * as api from '../api';
import { useEffect, useState } from "react";
import { getFilterByValue, sortInputFirst } from './utils';
import { DefaultNumbers, DefaultStrings, DeleteEmployeeData, EmployeeData, Employees, SearchEmployees, SearchTerms, Timer } from '../types';
import { RootState } from '../reducers';


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
        alert( DefaultStrings.createdMSG );
    }
    catch (error: any) {
        alert( DefaultStrings.unableToCreateMSG );
        throw new Error(error);
    }
}

export const deleteEmployee = (employee:DeleteEmployeeData) => async (dispatch: RootState) => {
    try {
        const { data } : {data: EmployeeData} = await api.deleteEmployee(employee);
        dispatch({ type: 'DELETE', payload: data });
        alert( DefaultStrings.deletedMSG );
    }
    catch (error:any) {
        alert( DefaultStrings.unableToDeletedMSG );
        throw new Error(error);
    }
}

let timer: Timer;
export const searchEmployees = ({
    searchValue = "",
    click = false,
    charsToStart = DefaultNumbers.charsToStart,
    time = DefaultNumbers.timer
    }: SearchEmployees) => async (dispatch: RootState) => {
    const localData = await JSON.parse( localStorage.getItem(DefaultStrings.localName) || "")       
    try { 
        if (localData.searchValue) {
            const filterFromLocal:Employees = getFilterByValue(localData, searchValue)
            const sortedFromLocal = sortInputFirst( searchValue, filterFromLocal);
            dispatch(  { type: 'SEARCH', payload: [...sortedFromLocal] } );             
            if (!click) {
                if (timer) clearTimeout(timer);
                await new Promise((resolve) => { timer = setTimeout(resolve, time); });
            }
            if (searchValue.length >= charsToStart || (click === true && searchValue.length > 0)) {
                const filterFromLocalId = filterFromLocal.map((employee:{_id: string}) => employee._id);
                const { data }: { data:Employees} = await api.searchEmployees({ searchValue: searchValue, searchExcludes: filterFromLocalId });
                const sortedResultsData = sortInputFirst( searchValue,[ ...sortedFromLocal,...data ]);
                dispatch( { type: 'SEARCH', payload: sortedResultsData} );
                const stringifyData =JSON.stringify( [ ...sortedResultsData ] );
                localStorage.setItem( DefaultStrings.localName, stringifyData )
            }
        } else if (searchValue.length >= charsToStart || click === true) {
            if (!click) {
                if (timer) clearTimeout(timer);
                await new Promise((resolve) => { timer = setTimeout(resolve, time); });
            }
            const { data }: { data:Employees} = await api.searchEmployees({ searchValue: searchValue, searchExcludes: []});
            const sortedData = sortInputFirst( searchValue, data);
                dispatch( { type: 'SEARCH', payload: [...sortedData] } );
                const stringifyData =JSON.stringify( [ ...sortedData ] );
                localStorage.setItem( DefaultStrings.localName, stringifyData )
        }
    }
    catch (error:any) { throw new Error(error); }
}

export const setSearchValue = (searchValue: { value?: string, ID: string }) => async (dispatch: RootState) => {
    const filteredValue = searchValue.value ? searchValue.value : "";
    const setForDispatch = { value: filteredValue, ID: searchValue.ID }
    dispatch({ type: 'SEARCH_VALUE', payload: setForDispatch })
};

export const setSearchTerms = (searchTerms: SearchTerms) => async (dispatch: RootState) => { dispatch({ type: 'SEARCH_TERMS', payload: searchTerms }) };
 
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