import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../actions/employees.js'

export const SearchTerms = ({ searchTerms, setSearchTerms}) => {
  const dispatch = useDispatch()
  const [inputType, setInputType] = useState(20);

  const searchByHandler = async (e) => { 
    setSearchTerms([searchTerms[0], e.target.value]);
    dispatch(setSearchValue(''));
    localStorage.clear();
  }

  const numOfResultsHandler = async (e) => { 
    setInputType(e.target.value);
    setSearchTerms([e.target.value, searchTerms[1]]);
    return e.target.value;
  }
    
  return (
      <div className="terms">
        <div className='row-c-c term'> Search  By: 
          <select className='search-options' onChange={searchByHandler} >
          <option value='Name'>Name</option>
          <option value='WorkTitle'>Work Title</option>
          </select>
        </div>
        <div className='row-c-c term'> Number of results : 
          <input type="range" min="1" max="50" value={inputType} className='search-options' onChange={numOfResultsHandler} />
          {searchTerms[0]}
          </div>
      </div>
  )
}
