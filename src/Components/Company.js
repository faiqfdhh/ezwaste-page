import React from 'react';
import Grid from '@mui/material/Grid';
import { ScrollAnimations } from './ScrollAnimation.tsx';
import Board from '../Images/Board.png';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FaiqCompany from '../Images/faiqProfile.jpg';
import FaridCompany from '../Images/faridProfile.png'; 
import NabilaCompany from '../Images/nabilaProfile.png';
import ArmanCompany from '../Images/armanProfile.jpg';
import AnwarCompany from '../Images/anwarProfile.png';
import background from '../Images/CompanyBG.png';


const Company = () => {
  function BasicModal() {
    const [faiqOpen, setFaiqOpen] = React.useState(false);
    const [faridOpen, setFaridOpen] = React.useState(false);
    const [nabilaOpen, setNabilaOpen] = React.useState(false);
    const [armanOpen, setArmanOpen] = React.useState(false);
    const [anwarOpen, setAnwarOpen] = React.useState(false);
  
    const handleFaiqOpen = () => setFaiqOpen(true);
    const handleFaiqClose = () => setFaiqOpen(false);
  
    const handleFaridOpen = () => setFaridOpen(true);
    const handleFaridClose = () => setFaridOpen(false);
  
    const handleNabilaOpen = () => setNabilaOpen(true);
    const handleNabilaClose = () => setNabilaOpen(false);
  
    const handleArmanOpen = () => setArmanOpen(true);
    const handleArmanClose = () => setArmanOpen(false);
  
    const handleAnwarOpen = () => setAnwarOpen(true);
    const handleAnwarClose = () => setAnwarOpen(false);

    const centralizedStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const gridItemStyle = {
      ...centralizedStyle,
      flexDirection: 'column', // Adjust if needed
    };

    const paperStyle = {
      width: '80%',
      height: '100%',
      textAlign: 'center',
      padding: '10px',
    };
    const paperStyle2 = {
      width: '60%',
      height: '100%',
      textAlign: 'center',
      padding: '10px',
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        transform: 'translate(-50%, -50%)',
        height: 600, // Adjusted height
        width: 800,
        bgcolor: 'white', // Changed background color to white for a clean look
        border: '2px solid #000',
        borderRadius: '8px', // Added border radius for a softer look
        boxShadow: '0px 1x 1px rgba(0, 0, 0, 0.5)', // Adjusted boxShadow for a subtle effect
        padding: '24px', // Increased padding for more spacing
        lineHeight: '2.3', // Adjusted line height for better readability
        fontSize: '20px', // Adjusted font size
        overflow: 'auto', // Added overflow for content scrolling if needed
        zIndex: 1000, // Added z-index to make sure it shows on top of other elements
        ul: {
            listType: 'none',
        },
        marginTop: "1rem",
        fontSize: "1.5rem",
        fontWeight:" 600",
        color: "black"
    };
      

    return (
      <div className='company-section-wrapper'>

        <div className='company-banner'>
          <ScrollAnimations>
            <img src={Board} alt="" />
          </ScrollAnimations>
        </div>

   
        <div className='company-directors'>

          <Grid container spacing={2} textAlign="center">
            <Grid item xs={12} md={12} sm={12} lg={4}  style={gridItemStyle}>
              <Paper elevation={6} style={paperStyle}>
                <ScrollAnimations>
                <img src={FaiqCompany} alt="" style={{ width: '100%', maxWidth: '100%' }} />
                <h1 className='CName'>Muhammad Faiq Fadhlullah</h1>
                <p className='CPosition'>Chief Executive Officer, Founder, Chairman</p>

                <div className='modal'>
                  <Button onClick={handleFaiqOpen}>Read more...</Button>
                  <Modal
                    open={faiqOpen}
                    onClose={handleFaiqClose}
                    aria-labelledby="modal-modal-title-faiq"
                    aria-describedby="modal-modal-description-faiq"
                    disablePortal
                    container={() => document.body}
                  >
                    
                    <Box sx={style}>
                    <h2 id="modal-modal-title-faiq">About Muhammad Faiq Fadhlullah</h2>
                        <p id="modal-modal-description-faiq" style={{ marginTop: '16px' }}>
                        Muhammad Faiq Fadhlullah is the Chief Executive Officer (CEO) of EZWaste, a visionary leader dedicated to making a positive impact on the environment through sustainable waste management solutions.
                        </p>

                        <p>
                            <br></br>
                        <strong>Motivations:</strong>
                        </p>
                        <ul>
                        <li>Passionate about environmental conservation and sustainability</li>
                        <li>Driven by a commitment to create a greener and cleaner future</li>
                        <li>Believes in the power of innovative solutions to address waste challenges</li>
                        </ul>

                        <p>
                        <br></br>
                        <strong>Inspirations:</strong>
                        </p>
                        <ul >
                        <li>Inspired by global leaders advocating for a sustainable planet</li>
                        <li>Draws motivation from success stories in the field of eco-friendly initiatives</li>
                        <li>Values the importance of community engagement in environmental efforts</li>
                        </ul>

                        <p>
                        <br></br>
                        <strong>Vision:</strong>
                        </p>
                        <p>
                        Faiq envisions a world where waste is managed responsibly, recycling is a common practice, and communities thrive in harmony with nature. His goal is to lead EZWaste towards becoming a forefront player in the waste management industry, known for its commitment to environmental stewardship and innovative solutions.
                        </p>

                    </Box>
                  </Modal>
                </div>
                </ScrollAnimations>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} sm={12} lg={4}  style={gridItemStyle}>
              <Paper elevation={6} style={paperStyle}>
                <ScrollAnimations>
                <img src={FaridCompany} alt="" style={{ height:'300px',maxWidth: '100%' }} />
                </ScrollAnimations>
                <ScrollAnimations>
                <h1 className='CName'>Muhammad Farid Azril</h1>
                <p className='CPosition'>Chief Technological Officer, Developer</p>
                <div className='modal'>
                  <Button onClick={handleFaridOpen}>Read more...</Button>
                  <Modal
                    open={faridOpen}
                    onClose={handleFaridClose}
                    aria-labelledby="modal-modal-title-farid"
                    aria-describedby="modal-modal-description-farid"
                    
                  >
                    <Box sx={style}>
                    <h2 id="modal-modal-title-farid">About Farid Azril</h2>
<p id="modal-modal-description-farid" style={{ marginTop: '16px' }}>
  Farid Azril serves as the Chief Technology Officer (CTO) at EZWaste, playing a pivotal role as one of the Lead Developers. His expertise in coding and technology is instrumental in shaping EZWaste's innovative solutions for sustainable waste management.
</p>

<p>
  <br></br>
  <strong>Technological Leadership:</strong>
</p>
<ul>
  <li>Leads the technology team with a focus on innovation and efficiency</li>
  <li>Drives the development of cutting-edge solutions for waste management challenges</li>
  <li>Guides the team in adopting the latest technologies to enhance system capabilities</li>
</ul>

<p>
  <br></br>
  <strong>Lead Developer:</strong>
</p>
<ul>
  <li>Actively contributes to the coding and development of EZWaste's software and systems</li>
  <li>Brings a wealth of experience to the development team, ensuring high-quality code</li>
  <li>Collaborates with cross-functional teams to integrate technology seamlessly</li>
</ul>

<p>
  <br></br>
  <strong>Innovative Coding:</strong>
</p>
<ul>
  <li>Champions innovative coding practices to address unique waste management requirements</li>
  <li>Contributes to the development of user-friendly interfaces and efficient algorithms</li>
  <li>Strives for excellence in code quality, security, and system scalability</li>
</ul>

<p>
  <br></br>
  <strong>CTO's Vision:</strong>
</p>
<p>
  Farid Azril envisions EZWaste as a technological leader in the waste management industry. His goal is to continuously enhance the company's technological capabilities, streamline processes through coding excellence, and contribute to a sustainable future through the power of innovative technology.
</p>

                    </Box>
                  </Modal>
                </div>
                </ScrollAnimations>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} sm={12} lg={4} style={gridItemStyle}>
              <Paper elevation={6} style={paperStyle}>
              <ScrollAnimations>
                <img src={NabilaCompany} alt="" style={{ maxWidth: '100%' }} />
                <h1 className='CName'>Nur Nabila Normiza Shahman</h1>
                <p className='CPosition'>Chief Marketing Officer, Head of Marketing</p>
                <div className='modal'>
                  <Button onClick={handleNabilaOpen}>Read more...</Button>
                  <Modal
                    open={nabilaOpen}
                    onClose={handleNabilaClose}
                    aria-labelledby="modal-modal-title-nabila"
                    aria-describedby="modal-modal-description-nabila"
                  >
                    <Box sx={style}>
                    <h2 id="modal-modal-title-nabila">About Nur Nabila</h2>
<p id="modal-modal-description-nabila" style={{ marginTop: '16px' }}>
  Nur Nabila serves as the Chief Marketing Officer (CMO) at EZWaste, bringing her expertise in video marketing, advertising, and strategic brand promotion to propel the company's message of sustainable waste management.
</p>

<p>
  <br></br>
  <strong>Strategic Marketing:</strong>
</p>
<ul>
  <li>Leads the marketing team with a strategic and data-driven approach</li>
  <li>Specializes in developing comprehensive marketing plans for maximum impact</li>
  <li>Strategizes to position EZWaste as a leading brand in the eco-friendly space</li>
</ul>

<p>
  <br></br>
  <strong>Video Marketing:</strong>
</p>
<ul>
  <li>Drives video marketing initiatives to communicate EZWaste's mission effectively</li>
  <li>Creates engaging video content that educates and inspires viewers about waste management</li>
  <li>Utilizes visual storytelling to enhance the brand's connection with the audience</li>
</ul>

<p>
  <br></br>
  <strong>Advertising Mastery:</strong>
</p>
<ul>
  <li>Oversees advertising campaigns with a focus on environmental impact</li>
  <li>Utilizes innovative and sustainable advertising methods to reach diverse audiences</li>
  <li>Aligns advertising efforts with the company's commitment to eco-friendly practices</li>
</ul>

<p>
  <br></br>
  <strong>CMO's Vision:</strong>
</p>
<p>
  Nur Nabila envisions EZWaste as not just a waste management company but a dynamic and influential brand that inspires positive environmental action. Her goal is to leverage strategic marketing, impactful videos, and sustainable advertising to promote EZWaste's mission and contribute to a greener, cleaner planet.
</p>


                    </Box>
                  </Modal>
                </div>
                </ScrollAnimations>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} sm={12} lg={6} style={gridItemStyle}>
              <Paper elevation={6} style={paperStyle2}>
              <ScrollAnimations>
                <img src={ArmanCompany} alt="" style={{ width: '250px', }} />
                <h1 className='CName'>Arif Arman Bin Mazlan</h1>
                <p className='CPosition'>Chief Operations Officer, Lead Designer</p>
                <div className='modal'>
                  <Button onClick={handleArmanOpen}>Read more...</Button>
                  <Modal
                    open={armanOpen}
                    onClose={handleArmanClose}
                    aria-labelledby="modal-modal-title-arman"
                    aria-describedby="modal-modal-description-arman"
                  >
                    <Box sx={style}>
                    <h2 id="modal-modal-title-arman">About Arif Arman</h2>
<p id="modal-modal-description-arman" style={{ marginTop: '16px' }}>
  Arif Arman serves as the Chief Operating Officer (COO) at EZWaste, bringing a unique blend of operational expertise and creative design to drive the company's success in sustainable waste management solutions.
</p>

<p>
  <br></br>
  <strong>Operational Excellence:</strong>
</p>
<ul>
  <li>Leads with a focus on operational efficiency and effectiveness</li>
  <li>Committed to streamlining processes for optimal waste management outcomes</li>
  <li>Brings a strategic mindset to enhance overall business operations</li>
</ul>

<p>
  <br></br>
  <strong>Design Innovation:</strong>
</p>
<ul>
  <li>Serves as the main designer, infusing creativity into EZWaste's visual identity</li>
  <li>Passionate about creating designs that communicate the company's commitment to sustainability</li>
  <li>Believes in the power of thoughtful design to convey complex environmental messages</li>
</ul>

<p>
  <br></br>
  <strong>Leadership and Collaboration:</strong>
</p>
<ul>
  <li>Collaborative leader fostering teamwork and cross-functional collaboration</li>
  <li>Values the importance of a strong, unified team in achieving common goals</li>
  <li>Guides EZWaste with a vision for sustainable and visually compelling solutions</li>
</ul>

<p>
  <br></br>
  <strong>COO's Vision:</strong>
</p>
<p>
  Arif Arman envisions EZWaste as a leading force in the waste management industry, recognized not only for operational excellence but also for innovative and visually impactful design. His goal is to contribute to a sustainable future by combining effective operations with engaging design elements.
</p>

                    </Box>
                  </Modal>
                </div>
                </ScrollAnimations>
              </Paper>
            </Grid>
 

            <Grid item xs={12} md={12} sm={12} lg={6} style={gridItemStyle}>
              <Paper elevation={6} style={paperStyle2}>
                <ScrollAnimations>
                <img src={AnwarCompany} alt="" style={{width:'300px', height:'280px',maxWidth: '100%' }} />
                <h1 className='CName'>Muhammad Nurrilanwar Muhammadin</h1>
                <p className='CPosition'>Chief Intelligent Officer, Project Lead</p>
                <div className='modal'>
                  <Button onClick={handleAnwarOpen}>Read more...</Button>
                  <Modal
                    open={anwarOpen}
                    onClose={handleAnwarClose}
                    aria-labelledby="modal-modal-title-anwar"
                    aria-describedby="modal-modal-description-anwar"
                  >
                    <Box sx={style}>
                    <h2 id="modal-modal-title-anwar">About Anwar Muhammadin</h2>
<p id="modal-modal-description-anwar" style={{ marginTop: '16px' }}>
  Anwar Muhammadin is the Chief Technology Officer (CTO) at EZWaste, leading the charge in technological innovation and driving the company's commitment to sustainable waste management solutions.
</p>

<p>
  <br></br>
  <strong>Passion for Innovation:</strong>
</p>
<ul>
  <li>Enthusiastic about pushing the boundaries of technology for environmental conservation</li>
  <li>Committed to creating innovative solutions that contribute to a cleaner and greener future</li>
  <li>Believes in harnessing the power of cutting-edge technology to address complex waste challenges</li>
</ul>

<p>
  <br></br>
  <strong>Sources of Inspiration:</strong>
</p>
<ul>
  <li>Draws inspiration from breakthroughs in technology with positive environmental impacts</li>
  <li>Motivated by success stories in implementing advanced, eco-friendly initiatives</li>
  <li>Values the role of technology in fostering community engagement and participation</li>
</ul>

<p>
  <br></br>
  <strong>Technological Vision:</strong>
</p>
<p>
  Anwar envisions a future where technology plays a central role in responsible waste management practices, making recycling and sustainability accessible to all. His goal is to position EZWaste as a pioneer in technological advancements within the waste management industry, setting new standards for eco-friendly solutions.
</p>

                    </Box>
                  </Modal>
                </div>
                </ScrollAnimations>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };

  return <BasicModal />;
};

export default Company;
