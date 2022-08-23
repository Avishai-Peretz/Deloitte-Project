import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Employee from './Employee/Employee.js'
import './style.css'

const Employees = ({page = "", searchTerms = []}) => {
  const [employees, setEmployees] = useState([])
  const getEmployees = useSelector((state) => state.employees);
  const getResults = useSelector((state) => state.searchResult);
  const getSearchValue = useSelector((state) => state.searchValue);
  
  
  useEffect(() => {
    if (page === 'home') { getSearchValue.length > 0 ? setEmployees(getResults) : setEmployees([]) }
    if (page === 'searchResults') { setEmployees(getResults) }
    if (page === 'admin') {
      if (getSearchValue.length === 0) {
        setEmployees(getEmployees);
      }
      else setEmployees(getResults);
    }
  }, [getSearchValue, getResults,getEmployees])
  
  const Home = (employee, index) => (
    <div page='home' key={employee._id} className={`employee-${page} row-c-sb`} >
      <Employee employee={employee} employees={employees} index={index} searchValue={getSearchValue} />
    </div>
  )
  
  const Admin = (employee, index) =>(
    <div key={employee._id} className={`employee-${page} row-c-sb`} >
      <Employee page='admin' employee={employee} employees={employees} index={index} searchValue={getSearchValue} />
      <h6>ID : {employee._id}</h6>
    </div>
  )

  return (
    <>   
      <div className={`employees-container ${page}`}>
          { !employees  ? "" : employees.map((employee, index) =>
            searchTerms[0] > index && (page === 'home' || page === 'searchResults') ? Home(employee, index) :
            searchTerms[0] > index && page === 'admin'? Admin(employee, index) : (<></>))
        }
      </div>
    </>
  )
}
export default Employees;