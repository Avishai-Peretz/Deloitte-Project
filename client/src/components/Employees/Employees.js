import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Employee from './Employee/Employee.js'
import './style.css'

const Employees = ({page = "", searchTerms = [], searchValue = "", searchResult = []}) => {
  const [employees, setEmployees] = useState([])
  const getEmployees = useSelector((state) => state.employees);
  const getResults = useSelector((state) => state.searchResult);
  
  
  useEffect(() => {
    if (searchValue.length) {
      if (page === 'home') {
    searchValue.length > 0 ? setEmployees(getResults) : setEmployees([])
    }
    if (page === 'searchResults') {
      setEmployees(getResults)
    }
    if (page === 'admin' ) {
      if (searchValue.length === 0) {
        setEmployees(getEmployees);
      }else setEmployees(getResults);
    }}
  }, [searchValue, getResults,getEmployees])
  
  
  return (
    <>   
      <div className={`employees-container ${page}`}>
          { !employees  ? "" : employees.map((employee, index) =>
          searchTerms[0] > index ? (
          <div key={employee._id} className={`employee-${page} row-c-sb`} >
            <Employee employee={employee} employees={employees} index={index} searchValue={searchValue} />
            { page === 'admin' ? <h6>ID : {employee._id}</h6> : '' }
          </div>
          ) : (<></>)
          )}
      </div>
    </>
  )
}
export default Employees;