import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {searchEmployees,setSearchValue, useKeyNavigation} from '../../../actions/useHooks.js'
import { searchResult } from '../../../reducers/reducer.js'
import './style.css'



const Employee = ({ employee, index, enterPress }) => {
  const [afterClick, setAfterClick] = useState(Boolean(false));
  const getSearchValue = useSelector((state) => state.autocomplete.value);
  const selectedIndex = useSelector((state) => state.autocompleteKey);
  const getResults = useSelector((state) => state.searchResult);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const highlight = (getSearchValue, { Name }) => {
    const inner = Name.replace( new RegExp(getSearchValue, 'gi'), (str) => `<span class="marker">${str}</span>` );
    return { __html: inner };
  };
  
  const handleAutocomplete = async () => {
    if ( employee ) {
      dispatch(setSearchValue({value:employee.Name}));
      const getSearchTerms = [20, "Name"];
      const searchObject = { searchValue: employee.Name, searchTerms: getSearchTerms };
      dispatch(searchEmployees(searchObject)); 
    }
  }
  
  
  const handleHover = () => { dispatch({ type: 'SELECT_KEY', payload: index })} 
  const handleEnter =async () => {
    if (enterPress && index === selectedIndex) {
      dispatch({ type: 'ENTER', payload: index });
      await handleAutocomplete();
      navigate("/search-results", { replace: true })
    }
  } 
  
  useEffect(() => { handleEnter() }, [enterPress])
  useEffect(() => { dispatch({ type: 'SELECT_KEY', payload: 0 }) }, [getSearchValue])
  
  return (
    <div
      className={`employee-container row-c-sb employee-${index} selected-${selectedIndex === index ? 'true' : 'false'}`}
      onClick={ handleAutocomplete }
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      >
        <img className='employee-img' src={ employee.ImageUrl } />
        <div className='txt-container column-c-se'>
          <h3 style={ { color:'#894d5c' } } dangerouslySetInnerHTML={ highlight( getSearchValue,employee ) }></h3>
          <h5 className='work-title' >{ employee.WorkTitle }</h5> 
        </div>
    </div>
  )
}
export default Employee;