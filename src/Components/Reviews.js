import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import ProfilePic1 from '../Images/faiq.jpg';
import ProfilePic2 from '../Images/faiq1.jpg';
import ProfilePic3 from '../Images/rando.jpg';
import ProfilePic4 from '../Images/shamira.jpg';
import ReviewBackground from '../Images/ReviewBackground.png';
import { ScrollAnimations } from './ScrollAnimation.tsx';

const items = [
  {
    profilePic: ProfilePic1,
    text: "'Recycling is easier than before thanks to EZWaste.'",
    stars: 5,
    author: "Amir Ahnaf",
  },
  {
    profilePic: ProfilePic2,
    text: " “Personally, I think that the user interface is pretty and easy to navigate. There is also many driver available in my area to picks my recyclable waste .”",
    stars: 5,
    author: "Zhang Wei",
  },
  {
    profilePic: ProfilePic3,
    text: "“As a housewife, this app helps me as I don’t have to go to the recycling center on my own. Now, I just need to schedule for pickup time, then any driver will accept my request  and came on schedule date and time. ”",
    stars: 5,
    author: "Natalia Amir",
  },
  {
    profilePic: ProfilePic4,
    text: " “This app makes me want to recycle more with its good rewards!!!”",
    stars: 5,
    author: "A.R Rahman",
  },
  
];

const CarouselExample = () => {
  return (
  <div className='about-section-container'>
       <div className="review-background-image-container">
        <img src={ReviewBackground} alt="" />
      </div>
    <div className='review-section-info'>
      
      <div className="work-section-top">
        <ScrollAnimations>
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Discover the firsthand experiences and reviews from our vibrant community, diving into the stories that fuel our exceptional EZWaste app.
        </p>
        </ScrollAnimations>
      </div>
<ScrollAnimations>
      <Carousel
        animation="fade"
        style={{
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          color: '#505050',
       
        }}
      >
        {items.map((item, i) => (
          <Paper key={i}>
            <img
              src={item.profilePic}
              alt=""
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                display: 'block',
                margin: '0 auto',
                paddingTop: '10px',
               
              }}
            />
            <h2 style={{ textAlign: 'center',marginTop:'10px' }}>{item.author}</h2>
            <p style={{
              textAlign: 'center',
              fontWeight: 900,
              fontSize: '20px',
              color: '#515151',
              maxWidth: '500px',
              margin: '2rem auto',
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>"{item.text}"</p>
            <div style={{ textAlign: 'center', margin: '0 auto',fontSize:"20px"}}>
              {Array.from({ length: item.stars }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </Paper>
        ))}
      </Carousel>
      </ScrollAnimations>
    </div>

  </div>
  );
};

export default CarouselExample;
