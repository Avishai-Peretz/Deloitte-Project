/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useKeyNavigation } from '../../actions/useHooks'
import { EmployeeData, Keys, Pages, Props } from '../../types'
import { RootState } from '../../reducers'
import Employee from './Employee/Employee'
import './style.css'

export let globalResults = []

const EmployeesList = ({ page }:Props) => {

  const [employees, setEmployees] = useState([])

  const dispatch:RootState = useDispatch()

const [ selectedIndex, getEmployees, getSearchValue ,getResults, { resultsNum } ] = [
    useSelector((state: RootState) => state.autocompleteKey),
    useSelector((state: RootState) => state.employees),
    useSelector((state: RootState) => state.autocomplete.value),
    useSelector((state: RootState) => state.searchResult),
    useSelector((state: RootState) => state.searchTerms),
  ];

  const arrowUpPress = useKeyNavigation(Keys.navUp)
  const arrowDownPress = useKeyNavigation(Keys.navDown)
  const enterPress = useKeyNavigation(Keys.navSelect);

  useEffect(():void => { if (arrowUpPress) { dispatch({ type: 'ARROW_UP' }) } }, [arrowUpPress]);
  useEffect(():void => { if (arrowDownPress) { dispatch({ type: 'ARROW_DOWN' }) } }, [arrowDownPress]);

  useEffect(():void => {
    globalResults = getResults
    if (page === Pages.home) { getSearchValue.length > 0 ? setEmployees(getResults) : setEmployees([]) }
    if (page === Pages.searchResults) { setEmployees(getResults) }
    if (page === Pages.admin) { if (!getSearchValue) { setEmployees(getEmployees); } else setEmployees(getResults); }
    console.log(employees)
  }, [getSearchValue, getResults, getEmployees])

  const scroll = ():void => {
    const active = document.querySelector(`.employee-${selectedIndex}`)
    if (active) { active.scrollIntoView({ behavior: "auto", block: "center" }); }
  }
  useEffect(():void => {
    scroll()
  }, [arrowUpPress, arrowDownPress]);

  return (
    <div className={`employees-container ${page}`} tabIndex={1}>
      {!employees ? "" : employees.map((employee:EmployeeData, index: number) =>
        resultsNum > index ?
          <div key={index} className={`employee-${page} row-c-sb`} >
            <Employee key={index} employee={employee} page={page} enterPress={enterPress}  index={index} />
          </div>
          : "")
      }
    </div>
  )
}
export default EmployeesList;