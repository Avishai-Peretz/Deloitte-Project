import React from 'react'
import './style.css'

const Employee = ({employee, index, searchValue}) => {
  
  const highlight = (searchValue, { Name }) => {
    const inner = Name.replace(new RegExp(searchValue, 'gi'), (str) => `<span class="marker">${str}</span>`)
    return {__html: inner}
  };
  
  return (
    <div className={`employee-container row-c-sb employee-${index}`}>
        <img className='employee-img' src={employee.ImageUrl} />
        <div className='txt-container column-c-se'>
          <h3 style={{color:'#894d5c'}} dangerouslySetInnerHTML={highlight(searchValue,employee)}></h3>
          <h5 className='work-title' >{employee.WorkTitle}</h5> 
        </div>
    </div>
  )
}
export default Employee;