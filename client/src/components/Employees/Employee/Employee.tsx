/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { searchEmployees, setSearchValue } from '../../../actions/useHooks'
import { Props, SearchEmployees } from '../../../types'
import { RootState } from '../../../reducers'
import './style.css'

const Employee = ({ employee, index, page, enterPress }:Props) => {

  const [ selectedIndex, getSearchValue, { charsToStart } ] = [
    useSelector((state: RootState) => state.autocompleteKey),
    useSelector((state: RootState) => state.autocomplete.value),
    useSelector((state: RootState) => state.searchTerms)
  ]

  const navigate = useNavigate();
  const dispatch:RootState = useDispatch();


  const highlight = (searchValue:string, str:string) => {
    if (searchValue && searchValue.length > 0) {
      const inner = str?.replace(new RegExp(searchValue, 'gi'), (str) => `<span class="marker">${str}</span>`);
      return { __html: inner };
    } else return { __html: str }
  }

  const handleHover = (e: React.MouseEvent<HTMLDivElement>):void => { e.preventDefault(); dispatch({ type: 'SELECT_KEY', payload: index })}

  const handleClickOrEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>|null):void => {
    if (index === selectedIndex && (enterPress || e)) {
      if (enterPress) {
        if (page === 'home') { navigate("/search-results", { replace: true }) }
        if (page === 'searchResults' && window.confirm('Are you sure you want to go to Admin(testing) page?')) {
          navigate("/admin", { replace: true })
        }
      }
      if (employee) {
          dispatch(setSearchValue({ ID: employee._id }));
        const searchObject: SearchEmployees = { searchValue: employee.WorkTitle, click: false, charsToStart: charsToStart };
          dispatch(searchEmployees(searchObject));
      }
      dispatch({ type: 'ENTER', payload: index });
    }
  }
  
  useEffect(():void => { handleClickOrEnter(null) }, [enterPress])


  return (
    <div
      className={`employee-container row-c-sb employee-${index} selected-${selectedIndex === index ? 'true' : 'false'}`}
      onClick={handleClickOrEnter} onMouseOver={handleHover} onMouseOut={handleHover}
    >
      <img className='employee-img' src={employee?.ImageUrl} alt="img" />
      <div className='txt-container column-c-se'>
        <h3 style={{ color: '#894d5c' }} dangerouslySetInnerHTML={highlight(getSearchValue, employee!.Name)}></h3>
        <h5 className='work-title' dangerouslySetInnerHTML={highlight(getSearchValue, employee!.WorkTitle)}></h5>
      </div>
      {page === 'admin' ? <h6>ID : {employee?._id}</h6> : <></>}
    </div>
  )
}
export default Employee;