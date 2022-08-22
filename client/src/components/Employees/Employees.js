import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Employee from './Employee/Employee.js'
import './style.css'

const Employees = ({page, searchTerms, searchValue}) => {
  const [employees, setEmployees] = useState([])
  const getEmployees = useSelector((state) => state.employees);
  const getResults = useSelector((state) => state.searchResult);
  
  
  useEffect(() => {
    if (page === 'home' || page === 'searchResults') {
      setEmployees(getResults)
    }
  }, [searchValue, getResults])
  
  useEffect(() => {
    if (page === 'admin') {
      setEmployees(getEmployees);
    }
  }, [searchValue,getEmployees])
  
  return (
    <>   
      <div className={`employees-container ${page}`}>
          { !employees ? "" : employees.map((employee, index) =>
          searchTerms[0] > index ? (
          <div key={employee._id} className={`employee-${page} row-c-sb`} >
            <Employee employee={employee} employees={employees} index={index} />
            { page === 'admin' ? <h4>ID : {employee._id}</h4> : '' }
          </div>
          ) : (<></>)
          )}
      </div>
    </>
  )
}
export default Employees;