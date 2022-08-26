import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees , setSearchValue } from '../../actions/useHooks.js'
import Employees from '../Employees/Employees.jsx';
import { SearchTerms } from './terms/SearchTerms';
import './style.css'

export const Search = ({ page }) => {
  
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerms, setSearchTerms] = useState([20, "Name"]);
  const [getSearchSettings, setGetSearchSettings] = useState(false);

  const dispatch = useDispatch();
  
  const getResults = useSelector((state) => state.searchResult);
  const getSearchValue = useSelector((state) => state.autocomplete.value);

  const searchAutocompleteHandler = (value) => {
    dispatch(setSearchValue({ value: value }));
    let searchObject = { searchValue: String(value), searchTerms: Array(...searchTerms), click: false };
    dispatch(searchEmployees(searchObject));
  }
  const searchButtonHandler = () => {
    let searchObject = { searchValue: String(getSearchValue), searchTerms: Array(...searchTerms), click: true };
    dispatch(searchEmployees(searchObject));
  }
  const resultsHandler = async () => { getSearchValue ? setSearchResult(await getResults) : setSearchResult([]); };
  
  useEffect(() => {
    dispatch({ type: 'SELECT_KEY', payload: null }); if (page === "home") dispatch(setSearchValue({ value: "" }));
  }, []);
  useEffect(() => {
    dispatch({ type: 'SELECT_KEY', payload: null });
  }, [getSearchValue]);
  useEffect(() => {
    resultsHandler();
  }, [getResults, getSearchValue]);
  
  const handleClear = () => {
    dispatch(setSearchValue({ value: "" }))
    dispatch(searchEmployees({}));
  }
  const handleSettings = () => {
    getSearchSettings ? setGetSearchSettings(false) : setGetSearchSettings(true)
  }

  const displayClear = getSearchValue === "" ? "none" : "";

  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        <input placeholder='Text Area' value={getSearchValue} onChange={(e) => {
          searchAutocompleteHandler(e.target.value)
        }} />
        <div className={`clear-btn btn ${page} ${displayClear}`} onClick={handleClear}></div>
        <div className={ !getSearchSettings ? 'none' : '' }><SearchTerms  searchTerms={searchTerms} setSearchTerms={setSearchTerms} /></div>
        <div className='options-container row-c-se'>
          <div className="settings-btn-container btn" ><div className={`settings-btn ${page} `} onClick={handleSettings}></div></div>
          {(page === 'searchResults' || page === 'home')
            ? (<div className='search-btn-container btn column-c-c' ><Link to='/search-results' ><button className='search-btn'
              onClick={searchButtonHandler}></button></Link></div>) : ''
          }
        </div>    
        {page === "home" ? (<Employees page='home' searchResult={searchResult} searchTerms={searchTerms} />) : '' }
      </div>
      {page === 'searchResults'?(<Employees  page='searchResults' searchResult={searchResult} searchTerms={searchTerms} />):''}
      {page === 'admin'?(<Employees  page='admin' searchResult={searchResult} searchTerms={[100, "Name" ]} />):''}
    </div>
  )
}
