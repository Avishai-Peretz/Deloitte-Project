import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autocompleteClick, autocompleteHover, searchEmployees, setSearchValue } from '../../../actions/employees.js'
import './style.css'



const Employee = ({ employee, index }) => {
  const [savedValue, setSavedValue] = useState();
  const [afterClick, setAfterClick] = useState(Boolean(false));
  const getSearchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  const highlight = (getSearchValue, { Name }) => {
    const inner = Name.replace( new RegExp(getSearchValue, 'gi'), (str) => `<span class="marker">${str}</span>` );
    return { __html: inner };
  };
  
  const itemClick = () => { setAfterClick(true); setTimeout(() => { setAfterClick(false) }, 500);  };
  
  const handleAutocompleteClick = () => {
    itemClick();
    if ( employee ) {
      dispatch(autocompleteClick(employee));
      dispatch(setSearchValue(employee.Name));
      const getSearchTerms = [20, "Name"];
      const searchValue = employee.Name;
      const searchObject = { searchValue: searchValue, searchTerms: getSearchTerms };
      dispatch(searchEmployees(searchObject));
  }}
    
  const handleAutocompleteHover = (state) => {
    if (state) { setSavedValue(getSearchValue); employee ? dispatch(autocompleteHover(employee)) : dispatch(autocompleteHover("")); }
    else if (savedValue && !afterClick) {
      dispatch(autocompleteHover({ Name: savedValue }));
    }
  }
  
  return (
    <div
      className={ `employee-container row-c-sb employee-${ index }` }
      onClick={ handleAutocompleteClick }
      onMouseEnter={ () => handleAutocompleteHover( true ) }
      onMouseLeave={ () => handleAutocompleteHover( false ) }
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