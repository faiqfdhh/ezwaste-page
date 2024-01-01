import { ExpandCircleDown, ExpandCircleDownSharp } from "@mui/icons-material";
import { Accordion,AccordionSummary, AccordionDetails,Typography} from "@mui/material";


 const Faq = () => {
    return(
        <div className="contact-page-wrapper"  >

        <h1 className='primary-heading' style={{textAlign:'center'}}>
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
                style={{backgroundColor:'#80ed99',
                        color:'white' ,
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
                    <p style={{fontSize:'20px'}}>Do I have to pay to sign up?</p>  
                </AccordionSummary>
                <AccordionDetails
                style={{backgroundColor:'#80ed99',
                        color:'white' ,
                        borderRadius:'12px' }}>
                    <p style={{fontSize:'20px'}}>No, signing up is free of charge! </p>
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
                    <p style={{fontSize:'20px'}}>Do I have to pay to sign up?</p>  
                </AccordionSummary>
                <AccordionDetails
                style={{backgroundColor:'#80ed99',
                        color:'white'  ,
                        borderRadius:'12px'}}>
                    <p style={{fontSize:'20px'}}>No, signing up is free of charge! </p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Faq;