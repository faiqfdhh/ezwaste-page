import React, { useState } from 'react';
import { ScrollAnimations } from './ScrollAnimation.tsx';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Contact = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [formValues, setFormValues] = useState({
    email: '',
    message: '',
  });
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClick = (newState) => () => {
    setSnackbarState({ ...newState, open: true });
  };

  const handleCloseSnackbar = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Clear validation errors on change
    setEmailError('');
    setMessageError('');
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    let isValid = true;

    if (!formValues.email.trim()) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!isEmailValid(formValues.email.trim())) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!formValues.message.trim()) {
      setMessageError('Message is required.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log({
        email: formValues.email,
        message: formValues.message,
      });

      // Display success notification
      handleClick({ vertical: 'top', horizontal: 'center' })();
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className='contact-page-wrapper'>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <h1 className='primary-heading'>
        <ScrollAnimations>Want to know more? <br/> Contact Us Below!</ScrollAnimations>
      </h1>
      <h1 className='primary-heading'>
        <ScrollAnimations>Let's Get To Know Better</ScrollAnimations>
      </h1>
      <div className='contact-form-container'>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type='text'
            placeholder='youremailaddress@gmail.com'
            name='email'
            value={formValues.email}
            onChange={handleChange}
            style={{ width: '320px' }}
          />
          <span style={{ color: 'red' }}>{emailError}</span>

          <input
            type='text'
            placeholder='Write your message here'
            name='message'
            value={formValues.message}
            onChange={handleChange}
            style={{ width: '520px', height: '200px' }}
          />
          <span style={{ color: 'red' }}>{messageError}</span>

          <button type='submit' className='secondary-button'>
            Submit
          </button>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: snackbarState.vertical, horizontal: snackbarState.horizontal }}
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Message sent! Our team will be in touch with you soon.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
