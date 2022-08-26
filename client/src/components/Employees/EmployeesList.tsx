import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useKeyNavigation } from '../../actions/useHooks'
import { Employees, Terms } from '../../interfaces/test'
import { RootState } from '../../reducers'
import Employee from './Employee/Employee'
import './style.css'

export let globalResults = []

const EmployeesList = ({ page }:any) => {

  const [employees, setEmployees] = useState([])

  const dispatch:any = useDispatch()

  const selectedIndex = useSelector((state:RootState) => state.autocompleteKey);
  const getEmployees = useSelector((state:RootState) => state.employees);
  const getSearchValue = useSelector((state:RootState) => state.autocomplete.value);
  const getResults = useSelector((state:RootState) => state.searchResult);
  const { field, resultsNum } = useSelector((state:RootState) => state.searchTerms)
  const searchTerms:Terms = [resultsNum, field];

  const arrowUpPress = useKeyNavigation('ArrowUp')
  const arrowDownPress = useKeyNavigation('ArrowDown')
  const enterPress = useKeyNavigation('Enter');

  useEffect(() => { if (arrowUpPress) { dispatch({ type: 'ARROW_UP' }) } }, [arrowUpPress]);
  useEffect(() => { if (arrowDownPress) { dispatch({ type: 'ARROW_DOWN' }) } }, [arrowDownPress]);

  useEffect(() => {
    globalResults = getResults
    if (page === 'home') { getSearchValue.length > 0 ? setEmployees(getResults) : setEmployees([]) }
    if (page === 'searchResults') { setEmployees(getResults) }
    if (page === 'admin') { if (!getSearchValue) { setEmployees(getEmployees); } else setEmployees(getResults); }
  }, [getSearchValue, getResults, getEmployees])

  const scroll = () => {
    const active = document.querySelector(`.employee-${selectedIndex}`)
    if (active) { active.scrollIntoView({ behavior: "auto", block: "center" }); }
  }
  useEffect(() => {
    scroll()
  }, [arrowUpPress, arrowDownPress]);

  return (
    <div className={`employees-container ${page}`} tabIndex={100}>
      {!employees ? "" : employees.map((employee, index) =>
        searchTerms[0] > index ?
          <div key={index} className={`employee-${page} row-c-sb`} >
            <EmployeesList key={index} employee={employee} page={page} enterPress={enterPress} employees={employees} index={index} searchValue={getSearchValue} />
          </div>
          : "")
      }
    </div>
  )
}
export default EmployeesList;