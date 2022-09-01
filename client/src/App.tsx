import { Routes, Route,Link} from "react-router-dom";
import './assets/display.css';
import './assets/fonts.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Admin from './pages/admin/Admin';
import deloitteLogo from './assets/images/Deloitte_logo_white.png'
import { setSearchTerms } from "./actions/useHooks";
import { useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { SearchTerms } from "./types";
import { getTerms } from "./api";
import { useEffect } from "react";

const App = () => {

  const dispatch: RootState = useDispatch();
  
  const fetchTerms = async () => {
    const { data }: { data: SearchTerms } = await getTerms();
    dispatch(setSearchTerms({resultsNum: data.resultsNum, charsToStart:data.charsToStart , timer: data.timer}));
  }

  useEffect( () => {fetchTerms()}, [] );
  return (
    <>
      <div className='app-container column-fs-c'>  
        <Link to='/' >
          <img src={ deloitteLogo } alt='Deloitte' className='deloitte-logo' />
        </Link>
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/search-results' element={<SearchResults/>} />  
          <Route path='/admin' element={<Admin/>} />  
        </Routes>
        <h3 className='bold txt_white txt_align rights'> Deloitte Project | &copy; Avishai Peretz</h3>
      </div>
      <div className='app-container mobile column-fs-c'>  
        <Link to='/' >
          <img src={ deloitteLogo } alt='Deloitte' className='deloitte-logo' />
        </Link>
        <h1> Screen dimensions is not compatible !</h1>
        <div className='rotate-img'></div>
        <h3 className='bold txt_white txt_align rights'> Deloitte Project | &copy; Avishai Peretz</h3>
      </div>
    </>
  )
}

export default App;

