import './index.css';
import React, { useState, useEffect } from 'react';
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
import LoadingScreen from "./Images/Loading1-unscreen.gif";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])

  if (loading) {
    return(
    <div className='loading-screen' >
    <img src={LoadingScreen} alt="Loading..."  />
    </div>
    );
  }

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