import React from "react"; 
import {Outlet} from "react-router-dom"; 
import Navbar from "./Navbar"; 
import Footer from "./Footer";

const Layout = () => {   
    return (     <>      
    <Navbar />    
    <br></br> 
    <Outlet />   
    <br></br>
    <Footer/>
      </>   ); }; 
export default Layout;