import {  ExpandCircleDownSharp } from "@mui/icons-material";
import { Accordion,AccordionSummary, AccordionDetails} from "@mui/material";


 const Faq = () => {
    return(
        <div className="contact-page-wrapper"  >

        <h1 className='primary-heading' style={{textAlign:'center', marginBottom:'2rem'}}>
             Frequently Asked Questions
        </h1>
        
            <Accordion
            square={false}
            style={{width:'80vw', borderRadius:'12px'
                    }}>
                <AccordionSummary id="panel1-header" 
                                  aria-aria-controls="panel1-content"
                                  expandIcon={<ExpandCircleDownSharp/>}
                style={{backgroundColor:'#0a9830',
                        color:'white',
                        borderRadius:'12px' }}>
                    <p style={{fontSize:'20px'}}>Do I have to pay to sign up?</p>  
                </AccordionSummary>
                
                <AccordionDetails
                style={{backgroundColor:'#f6f6f6',
                        color:'black' ,
                        borderRadius:'12px' }}>
                    <p style={{fontSize:'20px'}}>No, signing up is free of charge! </p>
                </AccordionDetails>
            </Accordion>
<br></br>
<Accordion
            square={true}
            style={{width:'80vw',
            borderRadius:'12px'
                    }}>
                <AccordionSummary id="panel1-header" 
                                  aria-aria-controls="panel1-content"
                                  expandIcon={<ExpandCircleDownSharp/>}
                style={{backgroundColor:'#0a9830',
                        color:'white',
                        borderRadius:'12px' }}>
                    <p style={{fontSize:'20px'}}>Is the EZwaste app compatible for all type of devices ?</p>  
                </AccordionSummary>
                <AccordionDetails
                style={{backgroundColor:'#f6f6f6',
                color:'black' ,
                        borderRadius:'12px' }}>
                    <p style={{fontSize:'20px'}}>Currenly, the EZWaste app is only compatible for mobile devices, such as Android and IOS. </p>
                </AccordionDetails>
            </Accordion>
            
<br></br>
<Accordion
            square={false}
            style={{width:'80vw',
            borderRadius:'12px',
            backgroundColor:'#f6f6f6' }}>
                <AccordionSummary id="panel1-header" 
                                  aria-aria-controls="panel1-content"
                                  expandIcon={<ExpandCircleDownSharp/>}
                style={{backgroundColor:'#0a9830',
                        color:'white',
                        borderRadius:'12px'}}>
                    <p style={{fontSize:'20px'}}>How can I check service availability in my area?</p>  
                </AccordionSummary>
                <AccordionDetails
                style={{backgroundColor:'#f6f6f6',
                color:'black' ,
                        borderRadius:'12px',}}>
                    <p style={{fontSize:'20px'}}>Simply navigate to the 'Service Availability' section within the app. Enter your location or address, and real-time information will be provided regarding the service coverage in your area</p>
                </AccordionDetails>
            </Accordion>
            <br></br>
            <Accordion
            square={false}
            style={{width:'80vw',
            borderRadius:'12px',
            backgroundColor:'#f6f6f6' }}>
                <AccordionSummary id="panel1-header" 
                                  aria-aria-controls="panel1-content"
                                  expandIcon={<ExpandCircleDownSharp/>}
                style={{backgroundColor:'#0a9830',
                        color:'white',
                        borderRadius:'12px'}}>
                    <p style={{fontSize:'20px'}}>What types of waste materials do you pick up?
</p>  
                </AccordionSummary>
                <AccordionDetails
                style={{backgroundColor:'#f6f6f6',
                color:'black' ,
                        borderRadius:'12px'}}>
                    <p style={{fontSize:'20px'}}>We pick up various recyclable materials such as paper, cardboard, plastics, glass, metals. Be mindful to not include dangerous materials such as explosives, chemicals or toxic materials.</p>
                </AccordionDetails>

            </Accordion>
            <br></br>
            <Accordion
            square={false}
            style={{width:'80vw',
            borderRadius:'12px',
            backgroundColor:'#f6f6f6' }}>
                <AccordionSummary id="panel1-header" 
                                  aria-aria-controls="panel1-content"
                                  expandIcon={<ExpandCircleDownSharp/>}
                style={{backgroundColor:'#0a9830',
                        color:'white',
                        borderRadius:'12px'}}>
                    <p style={{fontSize:'20px'}}>What are the benefits of earning points with EZWaste?</p>  
                </AccordionSummary>
                <AccordionDetails
                style={{backgroundColor:'#f6f6f6',
                color:'black' ,
                        borderRadius:'12px'}}>
                    <p style={{fontSize:'20px'}}>You can redeem points to enjoy discounts on groceries at our partner stores and claim credits towards public transport fees!</p>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
export default Faq;