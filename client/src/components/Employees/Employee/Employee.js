import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { autocompleteClick, autocompleteHover, searchEmployees } from '../../../actions/employees.js'
import './style.css'



const Employee = ({employee, index, searchValue}) => {
  const [savedValue, setSavedValue] = useState()
  
  const dispatch = useDispatch()

  const highlight = (searchValue, { Name }) => {
    const inner = Name.replace(new RegExp(searchValue, 'gi'), (str) => `<span class="marker">${str}</span>`)
    return {__html: inner}
  };

  const handleAutocompleteClick = () => {
    if (employee) {
      dispatch(autocompleteClick(employee))
      const getSearchTerms = [20, "Name"]
      const searchValue = employee.Name
      const searchObject = { searchValue: searchValue, searchTerms: getSearchTerms }
      dispatch(searchEmployees(searchObject))
    }
  }
  
  const handleAutocompleteHover = (state) => {
    if (state) {
      setSavedValue(searchValue)
      employee ? dispatch(autocompleteHover(employee)) : dispatch(autocompleteHover(""))
    }
    else if (savedValue) {
      dispatch(autocompleteHover(savedValue))
    }
  }
  
  return (
    <div
      className={`employee-container row-c-sb employee-${index}`}
      onClick={handleAutocompleteClick}
      onMouseEnter={() => handleAutocompleteHover(true)}
      onMouseLeave={() => handleAutocompleteHover(false)}
      >
        <img className='employee-img' src={employee.ImageUrl} />
        <div className='txt-container column-c-se'>
          <h3 style={{color:'#894d5c'}} dangerouslySetInnerHTML={highlight(searchValue,employee)}></h3>
          <h5 className='work-title' >{employee.WorkTitle}</h5> 
        </div>
    </div>
  )
}
export default Employee;