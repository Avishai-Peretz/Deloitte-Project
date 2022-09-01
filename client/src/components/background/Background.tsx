import videoBg from '../../assets/images/deloitteBackground.mp4'
import './style.css'

export const Background = () => {
  
  return (
    <div className='background'>
      <div className='overlay'></div>
      <video className='background-video' autoPlay loop playsInline muted src={videoBg} />
    </div>
  )
}
