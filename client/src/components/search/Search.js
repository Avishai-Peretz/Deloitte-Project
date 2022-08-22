import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees } from '../../actions/employees.js'
import Employees from '../Employees/Employees.js';
import './style.css'
import { SearchTerms } from './terms/SearchTerms.jsx';

export const Search = ({page}) => {
  const [searchValue,setSearchValue] = useState(String(""))
  const [searchResult, setSearchResult] = useState([])
  const [searchTerms, setSearchTerms] = useState([20, "Name" ])
  
  const dispatch = useDispatch()
  const getResults = useSelector((state) => state.searchResult);
  
  const searchHandler = (value) => {
    setSearchValue(value)
    const getSearchTerms = searchTerms
    const searchObject = { searchValue: value, searchTerms : getSearchTerms}
    dispatch(searchEmployees(searchObject));
  }


  const resultsHandler = async () => {
    searchValue > 0 ? setSearchResult(await getResults) : setSearchResult([]);
  }
  
  useEffect(() => {
    resultsHandler() 
  },[searchValue, getResults])


  
  return (
    <div className={`search-${page} column-fs-c`}>
      <div className='search-container column-c-c'>
        {(page === 'searchResults' || page === 'home')?(<SearchTerms searchTerms={searchTerms} setSearchValue={setSearchValue} setSearchTerms={setSearchTerms} />):''}
        <input placeholder='Text area' value={searchValue} onChange={(e) => {searchHandler(e.target.value)}} />
        {(page === 'searchResults' || page === 'home')?(<div className='search-btn-container column-c-c'> <Link to='/search-results' ><button className='search-btn'></button></Link></div>):''}
        {page === "home" ? (<Employees page='home' searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />) : '' }
      </div>
      {page === 'searchResults'?(<Employees page='searchResults' searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />):''}
      {page === 'admin'?(<Employees page='admin' searchResult={searchResult} searchValue={searchValue} searchTerms={[100, "Name" ]} />):''}
    </div>
  )
}
