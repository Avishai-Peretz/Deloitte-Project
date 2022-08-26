import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSearchField, setSearchResultsNum, searchEmployees} from '../../../actions/useHooks.js'

export const SearchTerms = () => {
 
  const [inputType, setInputType] = useState(20);
  
  const dispatch = useDispatch()
  const getSearchValue = useSelector((state) => state.autocomplete.value);
  const { field, resultsNum } = useSelector((state) => state.searchTerms);
  const searchTerms = [resultsNum, field]

  const searchByHandler = async (e) => { 
    dispatch(setSearchField(e.target.value))
  }

  const numOfResultsHandler = async (e) => { 
    setInputType(e.target.value);
    dispatch(setSearchResultsNum(e.target.value));
  }


  useEffect(() => {
    const searchObject = { searchValue: String(getSearchValue), searchTerms: Array(...searchTerms), click: true };
    dispatch(searchEmployees(searchObject));
  }, [field]);
    
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
          {resultsNum}
          </div>
      </div>
  )
}
