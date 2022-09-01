import { Background } from '../../components/background/Background';
import { Search } from '../../components/search/Search';
import '../../assets/display.css';
import '../../assets/fonts.css';
import './index.css'
import { HTMLTitles, Pages } from '../../types';


const Home = () => {

  return (
    <>  
      <h1 className='txt-title-blue bold txt-title' >{HTMLTitles.homeMain}</h1>
      <h4 className='txt_white txt-subtitle'>{HTMLTitles.homeSecondary}</h4>
      <Search page={Pages.home}/>
      <Background />
    </>
  )
}
export default Home;