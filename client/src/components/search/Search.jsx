import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { searchEmployees , setSearchValue } from '../../actions/useHooks.js'
import Employees from '../Employees/Employees.jsx';
import { SearchTerms } from './terms/SearchTerms';
import './style.css'

export const Search = ({ page }) => {
  
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerms, setSearchTerms] = useState([Number(20), String("Name")]);
  const [getSearchSettings, setGetSearchSettings] = useState(false);

  const dispatch = useDispatch();

  const getResults = useSelector((state) => state.searchResult);
  const getSearchValue = useSelector((state) => state.autocomplete.value);

  const searchHandler =async (value) => {
    dispatch(setSearchValue({ value: value }));
    const getSearchTerms = searchTerms;
    const searchObject = { searchValue: value, searchTerms: getSearchTerms };
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
    console.log(getSearchSettings)
    getSearchSettings ? setGetSearchSettings(false) : setGetSearchSettings(true)
  }

  useEffect(() => {console.log(getSearchSettings)},[])

  const displayClear = getSearchValue === "" ? "none" : "";

  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        <input placeholder='Text Area'  value={getSearchValue} onChange={(e) => { searchHandler(e.target.value) }} />
        <div className={`clear-btn ${page} ${displayClear}`} onClick={handleClear}></div>
        <div className={ !getSearchSettings ? 'none' : '' }>
          <SearchTerms  searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
        </div>
        <div className='options-container row-c-se'>
          <div disable className="settings-btn-container"><div className={`settings-btn ${page} `} onClick={handleSettings}></div></div>
          {(page === 'searchResults' || page === 'home') ? (<div className='search-btn-container column-c-c'><Link to='/search-results' ><button className='search-btn'></button></Link></div>) : ''}
        </div>    
        {page === "home" ? (<Employees page='home' searchResult={searchResult} searchTerms={searchTerms} />) : '' }
      </div>
      {page === 'searchResults'?(<Employees page='searchResults' searchResult={searchResult} searchTerms={searchTerms} />):''}
      {page === 'admin'?(<Employees page='admin' searchResult={searchResult} searchTerms={[100, "Name" ]} />):''}
    </div>
  )
}
