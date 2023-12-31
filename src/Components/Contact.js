import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Want to know more? Contact Us Below!</h1>
        <h1 className='primary-heading'>Let's Get To Know Better</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='youremailaddress@gmail.com' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact