import React from 'react'
import { Background } from '../../components/background/Background'
import Employees from '../../components/Employees/Employees'
import { Search } from '../../components/search/Search'
// import { searchResult } from '../../reducers/employees'
import './style.css'

const SearchResults = () => {
  return (
      <>
        <h1 className='txt-title-blue bold'>Search Results</h1>
        <Search page="searchResults" />
        <Background />
      </>
  )
}
export default SearchResults;
