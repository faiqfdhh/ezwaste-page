import React, { useState } from "react";
import Logo from "../Images/logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/Company",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      path: "/Reviews",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/Contact",
    },
    {
      text: "Sign Up",
      icon: <HowToRegIcon />,
      path: "/Signup",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container" style={{height:'54.8px',borderRadius:'8px'}}>
        <img src={Logo} alt="" style={{height:"72px"}}/>
      </div>
      <div className="navbar-links-container">
        <a href=".">Home</a>
        <a href="./Company">Our Team</a>
        <a href="./Reviews">Reviews</a>
        <a href="./Contact">Contact</a>
        <Link to="/Signup" style={{color:'white',backgroundColor:'#fe9e0d',borderRadius:'8px',padding:'8px 20px'}}>Sign up</Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
