import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Employee from './Employee/Employee.js'
import './style.css'

const Employees = ({page, searchTerms, searchValue, searchResult}) => {
  const [employees, setEmployees] = useState([])
  const getEmployees = useSelector((state) => state.employees);
  
  useEffect(() => {
    console.log(getEmployees)
    if (page === 'admin') {
      const fetchAll = async () => setEmployees(await getEmployees);
      fetchAll();  
      }
    }, [,getEmployees])
  useEffect(() => {
    if (page === 'home' || 'searchResults') { setEmployees(searchResult) }
    }, [searchResult, searchValue])
  
  return (
    <>   
    {!employees.length ? "Loading..." : (
      <div className={`employees-container ${page}`}>
          {!employees.length ? "Loading..." : employees.map((employee, index) =>
          searchTerms[0] > index ? (
          <div key={employee._id} className={`employee-${page} row-c-sb`} >
            <Employee employee={employee} employees={employees} index={index} />
            { page === 'admin' ? <h4>ID : {employee._id}</h4> : '' }
          </div>
          ) : (<></>)
          )}
      </div>
     )}
    </>
  )
}
export default Employees;