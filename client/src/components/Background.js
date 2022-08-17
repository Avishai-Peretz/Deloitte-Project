import React, { Children } from 'react'
import videoBg from '../assets/deloitteBackground.mp4'
import deloitteLogo from '../assets/Deloitte_logo_white.png'

export const Background = () => {
  return (
      <div className='main'>
          <img src={deloitteLogo} alt='Deloitte' className='deloitte-logo'/>
          <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}
