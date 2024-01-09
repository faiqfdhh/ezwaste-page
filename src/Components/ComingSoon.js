import React from 'react'
import comingsoon from '../Images/404.png';
import { ScrollAnimations } from './ScrollAnimation.tsx';

const  ComingSoon = () => {
  return (
    <div className='coming-soon-section'>
      <div className='coming-soon-message'>
      <div className='coming-soon-image'>
        <ScrollAnimations>
        <img src={comingsoon} alt="" />
        </ScrollAnimations>
      </div>
      <div className='coming-soon-text'>
        <ScrollAnimations>
       <h1 className='primary-heading'>We are trying our best to expand this section. Stay tuned...</h1>  
       </ScrollAnimations>
      </div>
      </div>
    </div>
  )
}
export default ComingSoon;
