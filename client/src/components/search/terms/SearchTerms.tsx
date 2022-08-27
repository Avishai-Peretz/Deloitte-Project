/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchField, setSearchResultsNum, searchEmployees } from '../../../actions/useHooks'
import { SearchEmployees, Terms } from '../../../types';
import { RootState } from '../../../reducers';

export const TermsBox = () => {

  const [inputType, setInputType] = useState(20);

  const dispatch: RootState = useDispatch()
  
  const [getSearchValue , { field, resultsNum }] = [
    useSelector((state: RootState) => state.autocomplete.value),
    useSelector((state: RootState) => state.searchTerms)
  ]
  const searchTerms: Terms = [resultsNum, field];

  const searchByHandler = async (e:React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSearchField(e.target.value));
  }

  const numOfResultsHandler = async (e:React.FormEvent<HTMLInputElement>) => {
    setInputType(+e.currentTarget.value);
    dispatch(setSearchResultsNum(+e.currentTarget.value));
  }


  useEffect(() => {
    if(getSearchValue > 0) {const searchObject:SearchEmployees= { searchValue: getSearchValue, searchTerms: searchTerms, click: true };
    dispatch(searchEmployees(searchObject));}
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
