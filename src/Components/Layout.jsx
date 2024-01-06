import React from "react"; 
import {Outlet} from "react-router-dom"; 
import Navbar from "./Navbar"; 
import Footer from "./Footer";

const Layout = () => {   
    return (     <>      
    <Navbar />    
   
    <Outlet />   
    <br></br>
    <Footer/>
      </>   ); }; 
export default Layout;