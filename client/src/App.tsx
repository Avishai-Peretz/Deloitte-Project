import { Routes, Route,Link} from "react-router-dom";
import './assets/display.css';
import './assets/fonts.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Admin from './pages/admin/Admin';
import deloitteLogo from './assets/images/Deloitte_logo_white.png'
import { setSearchField, setSearchResultsNum } from "./actions/useHooks";
import { useDispatch } from "react-redux";
import { RootState } from "./reducers";

const App = () => {

  const dispatch:RootState = useDispatch()
  const logoClickHandler = () => {
    dispatch(setSearchField("Name"));
    dispatch(setSearchResultsNum(20));
  }

  return (
    <>
      <div className='app-container column-fs-c'>  
        <Link to='/' >
          <img src={ deloitteLogo } alt='Deloitte' className='deloitte-logo' onClick={logoClickHandler} />
        </Link>
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/search-results' element={<SearchResults/>} />  
          <Route path='/admin' element={<Admin/>} />  
        </Routes>
      </div>
      <div className='app-container mobile column-fs-c'>  
        <Link to='/' >
          <img src={ deloitteLogo } alt='Deloitte' className='deloitte-logo' />
        </Link>
        <h1> Screen dimensions is not compatible !</h1>
        <div className='rotate-img'></div>
      </div>
    </>
  )
}

export default App;

