/* eslint-disable no-sparse-arrays */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees , setSearchValue } from '../../actions/useHooks'
import EmployeesList from '../Employees/EmployeesList';
import './style.css'
import { Pages, Props, SearchEmployees, SearchValue } from '../../types';
import { RootState } from '../../reducers';

export const Search = ({ page }:Props) => {

  const dispatch:RootState = useDispatch();
  
  const [getSearchValue , { resultsNum, charsToStart, timer }] = [
    useSelector((state: RootState) => state.autocomplete.value),
    useSelector((state: RootState) => state.searchTerms)
  ]

  const searchTerms:number = resultsNum ;

  const searchAutocompleteHandler = ({ target: { value } }:React.ChangeEvent<HTMLInputElement>):void => {
    const searchValue: SearchValue = { value: value, ID: '' };
    dispatch(setSearchValue(searchValue));
    const searchObject: SearchEmployees = { searchValue: value, click: false, charsToStart: charsToStart, time:timer }; 
      dispatch(searchEmployees(searchObject));
  }
  const searchButtonHandler = ():void => {
    const searchObject = { searchValue: String(getSearchValue), searchTerms: searchTerms, click: true, charsToStart: charsToStart, time:timer  };
    dispatch(searchEmployees(searchObject));
  }

  const handleClear = ():void => {
    dispatch(setSearchValue({ value: "", ID: "" }));
    dispatch(searchEmployees({searchValue: "", click:false, charsToStart: charsToStart, time:timer }));
  }
  const displayClear = getSearchValue === "" ? "none" : "";
  
  useEffect(():void => {
    if (page === Pages.home) dispatch(setSearchValue({ value: "", ID: "" }));
  }, []);
  useEffect(():void => {
    dispatch({ type: 'SELECT_KEY', payload: null });
  }, [,getSearchValue]);


  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        <input placeholder='Text Area' value={getSearchValue} onChange={searchAutocompleteHandler} />
        <div className={`clear-btn btn ${page} ${displayClear}`} onClick={handleClear}></div>
        <div className='options-container row-c-se'>
          {(page === Pages.searchResults || page === Pages.home)
            ? (<div className='search-btn-container btn column-c-c' ><Link to='/search-results' ><button className='search-btn'
              onClick={searchButtonHandler}></button></Link></div>) : ''
          }
        </div>    
        {page === Pages.home ? (<EmployeesList page={Pages.home} />) : '' }
      </div>
      {page === Pages.searchResults? (<EmployeesList  page={Pages.searchResults}/>) : page === Pages.admin?(<EmployeesList  page={Pages.admin}/>) : ''}
    </div>
  )
}
