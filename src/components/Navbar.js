import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ASSETS from "../assets/Assets";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ currScreen }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
   return ()=>{
      window.removeEventListener('resize',showButton);
    }
  }, []);


  return (
    <>      
        <nav className='navbar'>
          <div className='navbar-container cont'>
            <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
             
            <img className="logo" src={ASSETS.logo} />
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/our-projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Cars
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/our-sponsors'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Our Sponsors
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/team'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Team
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/contact-us'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact-Us
                </NavLink>
              </li>
        
            </ul>
          </div>
        </nav>
     
    </>
  );
}


