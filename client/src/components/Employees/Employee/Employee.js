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

  
  const highlight = (searchValue, employee) => {
    if (searchValue && searchValue.length > 0) {   
      const inner = employee.replace( new RegExp(searchValue, 'gi'), (str) => `<span class="marker">${str}</span>` );
      return { __html: inner };
    }   
  }
   
  const handleHover = (e) => { e.preventDefault(); dispatch({ type: 'SELECT_KEY', payload: index }) } 
  
  const handleClickOrEnter = async (e, searchField) => {
    if (index === selectedIndex  && (enterPress||e)) {
      if (e) {
        if (page === 'home') { navigate("/search-results", { replace: true }) }
        if (page === 'searchResults' && window.confirm('Are you sure you want to go to Admin(testing) page?')) {
          navigate("/admin", { replace: true })
        }
      }
    if (employee) {
      if (searchField === 'Name') {
        dispatch(setSearchValue({value:employee.Name, ID: employee._id}));
        const getSearchTerms = [20, searchField];
        const searchObject = { searchValue: employee.Name, searchTerms: getSearchTerms };
        dispatch(searchEmployees(searchObject)); 
      }
      if (searchField === 'WorkTitle') {     
        dispatch(setSearchValue({value: employee.WorkTitle, ID: employee._id}));
        const getSearchTerms = [20, searchField];
        const searchObject = { searchValue: employee.WorkTitle, searchTerms: getSearchTerms };
        dispatch(searchEmployees(searchObject)); 
      }
    }
    dispatch({ type: 'ENTER', payload: index });
  }} 
  useEffect(() => { handleClickOrEnter(null, searchField) }, [enterPress])

  
  return (
    <div
      className={`employee-container row-c-sb employee-${index} selected-${selectedIndex === index ? 'true' : 'false'}`}
      onClick={(e)=>handleClickOrEnter(e, getSearchField)} onMouseEnter={handleHover} onMouseLeave={handleHover}
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