import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Steps from './Components/Steps';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Faq from './Components/FAQ';
import Company from './Components/Company';
import SignUp from './Components/Signup';

function App() {
  return (
  <div className="App">
     <BrowserRouter>       
     <Routes>      
     <Route path="/" element={<Layout />}>    
     <Route index element={<Home />} />         
     <Route path="about" element={<About />} />        
     <Route path="contact" element={<Contact />} />    
     <Route path="faq" element={<Faq />} />  
     <Route path="company" element={<Company />} />  
     <Route path="reviews" element={<Reviews />} />   
     <Route path="steps" element={<Steps />} />   
     <Route path="signup" element={<SignUp />} />
     </Route>       
     </Routes>    
     </BrowserRouter> 
    </div>

  );
}

export default App;
