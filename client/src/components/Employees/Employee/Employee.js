import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {searchEmployees, setSearchValue} from '../../../actions/useHooks.js'
import { employees } from '../../../reducers/reducer.js'
import './style.css'



const Employee = ({ employee, index, page, enterPress }) => {

  const selectedIndex = useSelector((state) => state.autocompleteKey);
  const getSearchValue = useSelector((state) => state.autocomplete.value);
  const getSearchField = useSelector((state) => state.searchField);

  const navigate = useNavigate();
  const dispatch = useDispatch();



  
  
  
  
  const eName = employee.Name;
  const job = employee.WorkTitle;
  
  const highlight = (searchValue, employee) => {     
      const inner = employee.replace( new RegExp(searchValue, 'gi'), (str) => `<span class="marker">${str}</span>` );
      return { __html: inner };
    }
  
  const handleAutocomplete = async (e) => {
    if (e) {
        if (page === 'home') { navigate("/search-results", { replace: true }) }
        if (page === 'searchResults' && window.confirm('Are you sure you want to go to Admin(testing) page?')) {
          navigate("/admin", { replace: true })
        }
    }
    if (employee) {
      dispatch({ type: 'ENTER', payload: index });
      dispatch(setSearchValue({value:employee.Name, ID: employee._id}));
      const getSearchTerms = [20, "Name"];
      const searchObject = { searchValue: employee.Name, searchTerms: getSearchTerms };
      dispatch(searchEmployees(searchObject)); 
    }
  }
   
  const handleHover = (e) => { e.preventDefault(); dispatch({ type: 'SELECT_KEY', payload: index }) } 
  
  const handleClickOrEnter = async (e) => {
    if (index === selectedIndex  && (enterPress||e)) {
      await handleAutocomplete(e);
      if (page === 'home') { navigate("/search-results", { replace: true }) }
      if (page === 'searchResults' && window.confirm('Are you sure you want to go to Admin(testing) page?')) {navigate("/admin", { replace: true })}
  }} 
  useEffect(() => { handleClickOrEnter() }, [enterPress])

  
  return (
    <div
      className={`employee-container row-c-sb employee-${index} selected-${selectedIndex === index ? 'true' : 'false'}`}
      onClick={handleClickOrEnter} onMouseEnter={handleHover} onMouseLeave={handleHover}
      >
      <img className='employee-img' src={ employee.ImageUrl } />
      <div className='txt-container column-c-se'>
        <h3 style={ { color:'#894d5c' } } dangerouslySetInnerHTML={getSearchField === "Name" ? highlight(getSearchValue, employee.Name ) :{ __html: employee.Name }  }></h3>
        <h5 className='work-title' dangerouslySetInnerHTML={getSearchField === "WorkTitle" ? highlight(getSearchValue, employee.WorkTitle ) :{ __html: employee.WorkTitle }  }></h5> 
      </div>
      {page === 'admin' ? <h6>ID : {employee._id}</h6> : <></>}
    </div>
  )
}
export default Employee;