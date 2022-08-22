import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees } from '../../actions/employees.js'
import Employee from '../Employees/Employee/Employee.js'
import Employees from '../Employees/Employees.js';
import './style.css'
import { SearchTerms } from './terms/SearchTerms.jsx';

export const Search = ({page}) => {
  const [searchValue,setSearchValue] = useState(String(""))
  const [searchResult, setSearchResult] = useState(Array())
  const [searchTerms, setSearchTerms] = useState([20, "Name" ])
  
  const dispatch = useDispatch()
  const getResults = useSelector((state) => state.searchResult);
  const getEmployees = useSelector((state) => state.employees)
  
  const searchHandler = (value) => {
    setSearchValue(value)
    const getSearchTerms = searchTerms
    const searchObject = { searchValue: value, searchTerms : getSearchTerms}
    dispatch(searchEmployees(searchObject));
  }


  const resultsHandler = async () => {
    searchValue.length > 0 ? setSearchResult(await getResults) : setSearchResult([])
  }
  const adminHandler = async () => {
    setSearchResult(await getEmployees)
  }

  useEffect(() => {
    if (page === 'admin') {
      console.log(searchResult)
      adminHandler()
      setSearchTerms([100, "Name" ])
    }
  }, [getEmployees])
  
  useEffect(() => {
    resultsHandler()
  },[searchValue, getResults])


  
  return (
    <div className={`search-${page} column-fs-c`}>
      <div className='search-container column-c-c'>
          {(page === 'searchResults' || page === 'home') ? (
            <SearchTerms searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
          ) : ''}
      <input placeholder='Text area' value={searchValue} onChange={(e) => {searchHandler(e.target.value)}} />
      <div className='search-btn-container column-c-c'>
        <Link to='/search-results' >
          <button className='search-btn'></button>
        </Link>
      </div>        
      {( page === "home" && searchResult.length) ? (
      <Employees page={page} searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />
        ) : ''
      }
      </div>
      {( (page === 'searchResults' || page === 'admin') && searchResult.length) ?(
      <Employees page={page} searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />
        ) : ''
      }
      </div>
  )
}
