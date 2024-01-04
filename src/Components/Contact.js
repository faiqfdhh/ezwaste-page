import React from 'react'
import { ScrollAnimations } from './ScrollAnimation.tsx'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>
          <ScrollAnimations>
            Want to know more? Contact Us Below!
          </ScrollAnimations>
          </h1>
        <h1 className='primary-heading'>
          <ScrollAnimations>Let's Get To Know Better
          </ScrollAnimations>
          </h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='youremailaddress@gmail.com' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact