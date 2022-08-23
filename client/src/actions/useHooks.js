import * as api from '../api';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const getEmployees = () => async (dispatch) => {
    try { const { data } = await api.fetchEmployees(); dispatch({ type : 'FETCH_ALL', payload: data });
    } catch ( error ) { throw new Error( error ); }
}

export const createEmployee = ( employee ) => async ( dispatch ) => {
    try { const { data } = await api.createEmployee(employee); dispatch( { type : 'CREATE', payload: data } ); }
    catch (error) { throw new Error( error ); }
}

export const deleteEmployee = ( employee ) => async ( dispatch ) => {
    try { const { data } = await api.deleteEmployee(employee); dispatch({ type: 'DELETE', payload: data }); }
    catch (error) {  throw new Error(error);  }
}

export const searchEmployees =({ searchValue = "", searchTerms = [] }) => async (dispatch) => {
    const sortInputFirst = (input, data = []) => {
        let first = []; let others = [];
        for (let i = 0; i < data.length; i++) { if (data[i].Name.toLowerCase().indexOf(input.toLowerCase()) === 0) { first.push(data[i]); }
            else { others.push(data[i]); }
        }
        first.sort(); others.sort(); return (first.concat(others));
    }
    const filteredValue = searchValue ? searchValue.replace( /[&\/\\#,+()$~%'":*?<>{}]/g, '_' ) : "";
    try { 
        if (localStorage.getItem( 'searchResults' )) {
            const localData = await JSON.parse(localStorage.getItem('searchResults'))       
            let filterFromLocal = []
            if ( searchTerms[1] === 'Name' ) {
                filterFromLocal = localData.filter(employee => employee.Name.toLowerCase().includes(filteredValue.toLowerCase()))
            }
            if ( searchTerms[1] === 'WorkTitle' ) {
                filterFromLocal = localData.filter(employee => employee.WorkTitle.toLowerCase().includes(filteredValue.toLowerCase()))
            }
            const sortedFromLocal = sortInputFirst( filteredValue, filterFromLocal );
            const filterFromLocalId = filterFromLocal.map( employee => employee._id );   
            dispatch( { type: 'SEARCH', payload: [...sortedFromLocal] } );             
            if (filteredValue.length > 1) {
                const { data } = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: filterFromLocalId, searchTerms: searchTerms});
                const resultsData = [ ...sortedFromLocal,...data ]
                dispatch( { type: 'SEARCH', payload: resultsData} );
                const stringifyData =JSON.stringify( [ ...localData,...data ] );
                localStorage.setItem( 'searchResults', stringifyData )
            }
        } else { 
            const { data } = await api.searchEmployees({ searchValue: filteredValue, searchExcludes: [], searchTerms: searchTerms });
            const sortedData = sortInputFirst( filteredValue, data );
                dispatch( { type: 'SEARCH', payload: [...sortedData] } );
                const stringifyData =JSON.stringify( [ ...sortedData ] );
                localStorage.setItem( 'searchResults', stringifyData )
        }
    }
    catch (error) { throw new Error(error); }
}


export const setSearchValue = (searchValue) => async (dispatch) => { dispatch({ type: 'SEARCH_VALUE', payload: searchValue }) }
export const autocompleteClick = (autocomplete) => async (dispatch) => { dispatch({ type: 'AUTOCOMPLETE_CLICK', payload: autocomplete }) }
export const autocompleteHover = (autocomplete) => async (dispatch) => { dispatch({ type: 'AUTOCOMPLETE_HOVER', payload:  autocomplete }) }
 
export const useKeyNavigation = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
    useEffect(
        () => {const downHandler = ({ key }) => { if (key === targetKey) { setKeyPressed(true); } };
            const upHandler = ({ key }) => {if (key === targetKey) {setKeyPressed(false);}};
            window.addEventListener('keydown', downHandler);window.addEventListener('keyup', upHandler);
            return () => { window.removeEventListener('keydown', downHandler); window.removeEventListener('keyup', upHandler); };
        }, [targetKey]);
    return keyPressed;
};