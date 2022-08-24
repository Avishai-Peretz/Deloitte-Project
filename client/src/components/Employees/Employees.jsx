import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useKeyNavigation } from '../../actions/useHooks.js'
import Employee from './Employee/Employee.js'
import './style.css'

export let globalResults = []

const Employees = ({ page , searchTerms }) => {

  const [employees, setEmployees] = useState([])

  const dispatch = useDispatch()

  const selectedIndex = useSelector((state) => state.autocompleteKey);
  const getEmployees = useSelector((state) => state.employees);
  const getResults = useSelector((state) => state.searchResult);
  const getSearchValue = useSelector((state) => state.autocomplete.value);
  
  const arrowUpPress = useKeyNavigation('ArrowUp')
  const arrowDownPress = useKeyNavigation('ArrowDown')
  const enterPress = useKeyNavigation('Enter');
  
  useEffect(() => {if (arrowUpPress) { dispatch({ type: 'ARROW_UP' })}}, [arrowUpPress]);
  useEffect(() => {if (arrowDownPress) { dispatch({ type: 'ARROW_DOWN' })}}, [arrowDownPress]);
  
  useEffect(() => {
    globalResults = getResults
    if (page === 'home') { getSearchValue.length > 0 ? setEmployees(getResults) : setEmployees([]) }
    if (page === 'searchResults') { setEmployees(getResults) }
    if (page === 'admin') {  if (!getSearchValue) { setEmployees(getEmployees); } else setEmployees(getResults); }
  }, [getSearchValue, getResults, getEmployees])
  
  const scroll = () => {
    const active = document.querySelector(`.employee-${selectedIndex}`)
    if(active) {active.scrollIntoView({behavior: "auto", block: "end", block: "center"});}
  }
  useEffect(() => {
    scroll()
  }, [arrowUpPress, arrowDownPress]);

  return ( 
      <div className={`employees-container ${page}`} tabIndex="100">
          { !employees  ? "" : employees.map((employee, index) =>
            searchTerms[0] > index ?
              <div key={index} className={`employee-${page} row-c-sb`} >
                <Employee key={index} employee={employee} page={page} enterPress={enterPress} employees={employees} index={index} searchValue={getSearchValue}/>
              </div>
            : "" )
        }
      </div>
  )
}
export default Employees;