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
  });
  const [emailError, setEmailError] = useState('');

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
    setEmailError('');
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = () => {
    const isValid = isEmailValid(formValues.email.trim());
    if (!isValid) {
      setEmailError('Please enter a valid email address.');
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log({
        email: formValues.email,
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
        <ScrollAnimations>Want to know more? Contact Us Below!</ScrollAnimations>
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
          />
          <span style={{ color: 'red' }}>{emailError}</span>
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
          Email sent! Our team will be in touch with you soon.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
