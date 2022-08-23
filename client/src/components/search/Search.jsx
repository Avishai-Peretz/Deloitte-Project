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

  useEffect(() => { resultsHandler() }, [getResults, getSearchValue]);
  useEffect(() => { if(page === "home") dispatch(setSearchValue({ value: "" })) }, []);

  const handleClear = () => {
    dispatch(setSearchValue({ value: "" }))
    dispatch(searchEmployees({}));
  }
  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        {(page === 'searchResults' || page === 'home')?(<SearchTerms searchTerms={searchTerms} setSearchTerms={setSearchTerms} />):''}
        <input placeholder='Text Area'  value={getSearchValue} onChange={(e) => { searchHandler(e.target.value) }} />
        <div className='clear-btn' onClick={handleClear}></div>
        {(page === 'searchResults' || page === 'home') ? (<div className='search-btn-container column-c-c'><Link to='/search-results' ><button className='search-btn'></button></Link></div>) : ''}
        {page === "home" ? (<Employees page='home' searchResult={searchResult} searchTerms={searchTerms} />) : '' }
      </div>
      {page === 'searchResults'?(<Employees page='searchResults' searchResult={searchResult} searchTerms={searchTerms} />):''}
      {page === 'admin'?(<Employees page='admin' searchResult={searchResult} searchTerms={[100, "Name" ]} />):''}
    </div>
  )
}
