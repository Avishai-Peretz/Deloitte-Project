import './style.css'
import { autocomplete } from '../../../actions/employees.js'
import { useDispatch } from 'react-redux'
const Employee = ({employee, index, searchValue}) => {
 
  const dispatch = useDispatch()

  const highlight = (searchValue, { Name }) => {
    const inner = Name.replace(new RegExp(searchValue, 'gi'), (str) => `<span class="marker">${str}</span>`)
    return {__html: inner}
  };

  const handleAutocomplete = () => {
    dispatch(autocomplete(employee.Name))
  }
  
  return (
    <div className={`employee-container row-c-sb employee-${index}`} onClick={handleAutocomplete}>
        <img className='employee-img' src={employee.ImageUrl} />
        <div className='txt-container column-c-se'>
          <h3 style={{color:'#894d5c'}} dangerouslySetInnerHTML={highlight(searchValue,employee)}></h3>
          <h5 className='work-title' >{employee.WorkTitle}</h5> 
        </div>
    </div>
  )
}
export default Employee;