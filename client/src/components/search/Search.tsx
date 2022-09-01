/* eslint-disable no-sparse-arrays */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees , setSearchValue } from '../../actions/useHooks'
import EmployeesList from '../Employees/EmployeesList';
import './style.css'
import { Props, SearchEmployees, SearchTerms, SearchValue } from '../../types';
import { RootState } from '../../reducers';
import { getTerms } from '../../api';

export const Search = ({ page }:Props) => {

  const dispatch:RootState = useDispatch();
  
  const [getSearchValue , { resultsNum, charsToStart }] = [
    useSelector((state: RootState) => state.autocomplete.value),
    useSelector((state: RootState) => state.searchTerms)
  ]

  const searchTerms:number = resultsNum ;

  const searchAutocompleteHandler = ({ target: { value } }:React.ChangeEvent<HTMLInputElement>):void => {
    const searchValue: SearchValue = { value: value, ID: '' };
    dispatch(setSearchValue(searchValue));
    const searchObject:SearchEmployees = { searchValue: value, searchTerms:searchTerms, click: false, charsToStart: charsToStart };
    dispatch(searchEmployees(searchObject));
  }
  const searchButtonHandler = ():void => {
    const searchObject = { searchValue: String(getSearchValue), searchTerms: searchTerms, click: true, charsToStart: charsToStart  };
    dispatch(searchEmployees(searchObject));
  }

  const handleClear = ():void => {
    dispatch(setSearchValue({ value: "", ID: "" }));
    dispatch(searchEmployees({searchValue: "", searchTerms:20, click:false, charsToStart: charsToStart }));
  }
  const displayClear = getSearchValue === "" ? "none" : "";
  
  useEffect(():void => {
    if (page === "home") dispatch(setSearchValue({ value: "", ID: "" }));
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
          {(page === 'searchResults' || page === 'home')
            ? (<div className='search-btn-container btn column-c-c' ><Link to='/search-results' ><button className='search-btn'
              onClick={searchButtonHandler}></button></Link></div>) : ''
          }
        </div>    
        {page === "home" ? (<EmployeesList page='home' />) : '' }
      </div>
      {page === 'searchResults'? (<EmployeesList  page='searchResults'/>) : page === 'admin'?(<EmployeesList  page='admin'/>) : ''}
    </div>
  )
}
