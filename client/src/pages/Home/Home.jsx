import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Background } from '../../components/background/Background';
import { Search } from '../../components/search/Search';
import deloitteLogo from '../../assets/images/Deloitte_logo_white.png'
import '../../assets/display.css';
import '../../assets/fonts.css';
import './index.css'


const Home = () => {

  return (
    <>  
      <h1 className='txt-title-blue bold txt-title'>LOOKING FOR AN EMPLOYEE?</h1>
      <h4 className='txt_white txt-subtitle'>Click on the search bar to learn our suggestions</h4>
      <Search page='home'/>
      <Background />
    </>
  )
}
export default Home;