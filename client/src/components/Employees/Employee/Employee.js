import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {searchEmployees,setObjectID,setSearchValue, useKeyNavigation} from '../../../actions/useHooks.js'
import './style.css'



const Employee = ({ employee, index, page, enterPress }) => {

  const selectedIndex = useSelector((state) => state.autocompleteKey);
  const getSearchValue = useSelector((state) => state.autocomplete.value);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const highlight = (getSearchValue, { Name }) => {
    const inner = Name.replace( new RegExp(getSearchValue, 'gi'), (str) => `<span class="marker">${str}</span>` );
    return { __html: inner };
  };
  
  const handleAutocomplete = async (e) => {
    if (employee) {
      dispatch({ type: 'ENTER', payload: index });
      dispatch(setSearchValue({value:employee.Name, ID: employee._id}));
      const getSearchTerms = [20, "Name"];
      const searchObject = { searchValue: employee.Name, searchTerms: getSearchTerms };
      dispatch(searchEmployees(searchObject)); 
    }
  }
   
  const handleHover = (e) => { e.preventDefault(); dispatch({ type: 'SELECT_KEY', payload: index }) } 
  
  const handleEnter = async () => {
    if (index === selectedIndex  && enterPress) {
      await handleAutocomplete();
      if (page === 'home') { navigate("/search-results", { replace: true }) }
      if (page === 'searchResults' && window.confirm('Are you sure you want to go to Admin(testing) page?')) {navigate("/admin", { replace: true })}
  }} 
  useEffect(() => { handleEnter() }, [enterPress])
  
  return (
    <div
      className={`employee-container row-c-sb employee-${index} selected-${selectedIndex === index ? 'true' : 'false'}`}
      onClick={handleAutocomplete} onMouseEnter={handleHover} onMouseLeave={handleHover}
      >
      <img className='employee-img' src={ employee.ImageUrl } />
      <div className='txt-container column-c-se'>
        <h3 style={ { color:'#894d5c' } } dangerouslySetInnerHTML={ highlight( getSearchValue,employee ) }></h3>
        <h5 className='work-title' >{ employee.WorkTitle }</h5> 
      </div>
      {page === 'admin' ? <h6>ID : {employee._id}</h6> : <></>}
    </div>
  )
}
export default Employee;