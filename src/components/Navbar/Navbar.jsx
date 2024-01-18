import { useState } from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaPinterest, FaGithub} from 'react-icons/fa'
import './NavbarStyles.css'
import { HiOutlineMenu } from 'react-icons/hi'
import { BiSearch,  } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-scroll'

import React from 'react';
import { AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)


  return (
    <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <div className={nav ? 'logo dark' : 'logo'}>
        <h2>MARITIME VIEWS</h2>
      </div>
      <ul className='nav-menu'>
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
        <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
        <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
        <Link to='books' smooth={true} duration={500}><li>Books</li></Link>
        <Link to='views' smooth={true} duration={500}><li>Views</li></Link>
      </ul>
      <div className="nav-icons">
        <BiSearch  className='icon' style={{marginRight:'1rem'}}/>
        <BsPerson className='icon' />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? <HiOutlineMenu className='icon' /> : <AiOutlineClose style={{color: '#000'}} />}
     
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
        <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
        <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
        <Link to='books'><li>Books</li></Link>
        <Link to='views'><li>Views</li></Link>
        </ul>
        <div className="mobile-menu-buttom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaLinkedin className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaGithub className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
