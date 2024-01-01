import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FaiqPicture from '../Images/faiqPicture.jpg';

 const Company = () => {
    return (
        <div className='company-section-wrapper'>
                
                <Grid container>
                        <Grid item xs={6.5} >
                        <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , height:'70vh'}}>
  <div className='primary-heading'>CEO</div>
  <img src={FaiqPicture} alt="" style={{ borderRadius: '8px', height: '30vh', margin: '0 auto' }} />
  <div className='primary-heading'>Muhammad Faiq Fadhlullah</div>
  <div className='primary-text'>Muhammad Faiq Fadhlullah</div>
</Paper>

                        </Grid>

                        <Grid item xs={5.5}>
                            <Paper>
                                <h1>Company</h1>
                            </Paper>
                        </Grid>
                </Grid>
                
        </div>
    )
}

export default Company;