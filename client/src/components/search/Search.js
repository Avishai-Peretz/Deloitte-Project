import { useEffect, useState } from 'react'
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
  const [autocomplete, setAutocomplete] = useState(String(""))
  
  const dispatch = useDispatch()
  const getResults = useSelector((state) => state.searchResult);
  const getAutocompleteClick = useSelector((state) => state.autocompleteClick);
  const getAutocompleteHover = useSelector((state) => state.autocompleteHover);
  
  
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
  },[getResults,])
  

  const handleAutocompleteClick = () => {
    if (searchValue)
    {
      setSearchValue(getAutocompleteClick.Name)
    }
  }
  useEffect(() => {
    handleAutocompleteClick()
  },[getAutocompleteClick])
  

  const handleAutocompleteHover = () => {
    setAutocomplete(getAutocompleteHover.Name)
  }

  useEffect(() => {
    handleAutocompleteHover()
  }, [getAutocompleteHover])
  

  const beforeLeaveToResults = () => {
    // debugger
  }

  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        {(page === 'searchResults' || page === 'home')?(<SearchTerms searchTerms={searchTerms} setSearchValue={setSearchValue} setSearchTerms={setSearchTerms} />):''}
        <input placeholder='Text area' value={ autocomplete || searchValue} onChange={(e) => {searchHandler(e.target.value)}} />
        {(page === 'searchResults' || page === 'home') ? (<div className='search-btn-container column-c-c'><Link to='/search-results' onClick={beforeLeaveToResults} ><button className='search-btn'></button></Link></div>) : ''}
        {page === "home" ? (<Employees page='home' searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />) : '' }
      </div>
      {page === 'searchResults'?(<Employees page='searchResults' searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />):''}
      {page === 'admin'?(<Employees page='admin' searchResult={searchResult} searchValue={searchValue} searchTerms={[100, "Name" ]} />):''}
    </div>
  )
}
