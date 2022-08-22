import React, { useState } from 'react'

export const SearchTerms = ({ searchTerms, setSearchTerms,setSearchValue }) => {
  const [inputType, setInputType] = useState(20);
  const searchByHandler = async (e) => { 
    setSearchTerms([searchTerms[0], e.target.value]);
    setSearchValue('');
    localStorage.clear();
  }
    const numOfResultsHandler = async (e) => { 
      setInputType(e.target.value);
      setSearchTerms([e.target.value, searchTerms[1]]);
      return e.target.value;
    }
    
  return (
      <div>
        <div className='row-c-c'> Search  By: 
          <select className='search-options' onChange={searchByHandler} >
          <option value='Name'>Name</option>
          <option value='WorkTitle'>Work Title</option>
          </select>
        </div>
        <div className='row-c-c'> Number of results : 
          <input type="range" min="1" max="50" value={inputType} className='search-options' onChange={numOfResultsHandler} />
          {searchTerms[0]}
          </div>
      </div>
  )
}
