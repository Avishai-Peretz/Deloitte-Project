import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees , setSearchValue } from '../../actions/useHooks'
import EmployeesList from '../Employees/EmployeesList';
import { TermsBox } from './terms/SearchTerms';
import './style.css'
import { SearchEmployees, SearchValue } from '../../interfaces/test';
import { AnyAction } from 'redux';
import { RootState } from '../../reducers';

export const Search = ({ page }:any) => {
  
  const [getSearchSettings, setGetSearchSettings] = useState(false);

  const dispatch:AnyAction|any = useDispatch();
  
  const getSearchValue = useSelector((state:RootState) => state.autocomplete.value);
  const { field, resultsNum} = useSelector((state:RootState) => state.searchTerms)
  const searchTerms:[number,string] = [resultsNum, field];

  const searchAutocompleteHandler = ({ target: { value } }:any) => {
    const searchValue:SearchValue = { value: value, ID:'' }
    dispatch(setSearchValue(searchValue));
    const searchObject:SearchEmployees = { searchValue: value, searchTerms:searchTerms, click: false };
    dispatch(searchEmployees(searchObject));
  }
  const searchButtonHandler = () => {
    const searchObject = { searchValue: String(getSearchValue), searchTerms: searchTerms, click: true };
    dispatch(searchEmployees(searchObject));
  }

  const handleClear = () => {
    dispatch(setSearchValue({ value: "", ID:"" }))
    dispatch(searchEmployees({searchValue: "", searchTerms:[20,"Name"], click:false}));
  }
  const handleSettings = () => {
    getSearchSettings ? setGetSearchSettings(false) : setGetSearchSettings(true)
  }
  const displayClear = getSearchValue === "" ? "none" : "";
  
  useEffect(() => {
    if (page === "home") dispatch(setSearchValue({ value: "" , ID:""}));
  }, []);
  useEffect(() => {
    dispatch({ type: 'SELECT_KEY', payload: null });
  }, [,getSearchValue]);


  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        <input placeholder='Text Area' value={getSearchValue} onChange={searchAutocompleteHandler} />
        <div className={`clear-btn btn ${page} ${displayClear}`} onClick={handleClear}></div>
        <div className={ !getSearchSettings ? 'none' : '' }><TermsBox /></div>
        <div className='options-container row-c-se'>
          <div className="settings-btn-container btn" ><div className={`settings-btn ${page} `} onClick={handleSettings}></div></div>
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
