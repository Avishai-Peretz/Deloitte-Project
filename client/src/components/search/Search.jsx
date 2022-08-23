import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchEmployees } from '../../actions/employees.js'
import Employees from '../Employees/Employees.jsx';
import { SearchTerms } from './terms/SearchTerms';
import './style.css'

export const Search = ({page}) => {
  const [searchValue,setSearchValue] = useState(String(""))
  const [searchResult, setSearchResult] = useState([])
  const [searchTerms, setSearchTerms] = useState([Number(20), String("Name") ])
  const [autocomplete, setAutocomplete] = useState([ Boolean, String("") ])
  
  const dispatch = useDispatch()
  const getResults = useSelector((state) => state.searchResult);
  const getAutocompleteClick = useSelector((state) => state.autocompleteClick);
  const getAutocompleteHover = useSelector((state) => state.autocompleteHover);
  
  const searchHandler = (value) => {
    setAutocomplete([false, ""])
    setSearchValue(value)
    const getSearchTerms = searchTerms
    const searchObject = { searchValue: value, searchTerms : getSearchTerms}
    dispatch(searchEmployees(searchObject));
  }
  const resultsHandler = async () => { searchValue ? setSearchResult(await getResults) : setSearchResult([]); }
  
  const handleAutocompleteClick = () => { if (searchValue) { setSearchValue(getAutocompleteClick.Name) } }
  const handleAutocompleteHover = () => { setAutocomplete([true, getAutocompleteHover.Name]) };

  useEffect(() => { resultsHandler() }, [ getResults ]);
  useEffect(() => { handleAutocompleteClick() },[ getAutocompleteClick ])
  useEffect(() => { handleAutocompleteHover() }, [ getAutocompleteHover ])


  return (
    <div className={`column-fs-c search-${page}`}>
      <div className='search-container column-c-c'>
        {(page === 'searchResults' || page === 'home')?(<SearchTerms searchTerms={searchTerms} setSearchValue={setSearchValue} setSearchTerms={setSearchTerms} />):''}
        <input placeholder='Text area' value={autocomplete[0] ? autocomplete[1] : searchValue} onChange={(e) => {searchHandler(e.target.value)}} />
        {(page === 'searchResults' || page === 'home') ? (<div className='search-btn-container column-c-c'><Link to='/search-results' ><button className='search-btn'></button></Link></div>) : ''}
        {page === "home" ? (<Employees page='home' searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />) : '' }
      </div>
      {page === 'searchResults'?(<Employees page='searchResults' searchResult={searchResult} searchValue={searchValue} searchTerms={searchTerms} />):''}
      {page === 'admin'?(<Employees page='admin' searchResult={searchResult} searchValue={searchValue} searchTerms={[100, "Name" ]} />):''}
    </div>
  )
}
