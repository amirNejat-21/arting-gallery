import React from 'react';
import { Link } from 'react-router-dom';
import{ FaWhatsapp } from 'react-icons/fa'
import{ FaTelegram } from 'react-icons/fa'
import{ FaInstagram } from 'react-icons/fa'
import{ FaAngleDown} from 'react-icons/fa'
import{ FaHome} from 'react-icons/fa'
import{ FaProductHunt} from 'react-icons/fa'
import{ FaClock} from 'react-icons/fa'
import{ AiFillContacts} from 'react-icons/ai'
import{ FaUser} from 'react-icons/fa'

import stayle from "./navbar.css"




const Navbar = () => {

    return (
        <header className="header">
       <div className="navigation">
        <input type="checkbox" className="toggle-men "/>
        <div className="hamburger"></div>
        <ul className="menu">
          <li><FaHome className="Home"/><Link to='/main'>Home</Link></li>
          <div class="dropdown">
               <span className='dropbtn'><FaProductHunt className="Home mt-1"/><Link>Product</Link>
                <FaAngleDown className='arrow' />
               </span>
               <div id='hw' class="dropdown-content">
                <Link to='/store'><FaClock className=' mr-2' />Link 1</Link>
                <Link to='/store'><FaClock className='mr-2' />Link 2</Link>
                <Link to='/store'><FaClock className='mr-2'/>Link 3</Link>
               </div>
           </div>
          <li><AiFillContacts className="Home"/><Link to='/'>contact</Link></li>
          <li><FaUser className="Home"/><Link to="/">About us</Link></li>

        <div className='social'>
                    <FaWhatsapp className='duration-300 p-3 mt-5  rounded-[7px] text-[color:var(--icons)] text-6xl cursor-pointer hover:scale-125 hover:text-[#28D146]'  />
                    <FaTelegram className='duration-300 p-3 mt-5  rounded-[7px]  text-[color:var(--icons)] text-6xl cursor-pointer hover:scale-125 hover:text-[#229ED9]' />
                    <FaInstagram className='duration-300 p-3 mt-5  rounded-[7px]  text-[color:var(--icons)] text-6xl cursor-pointer hover:scale-125 hover:text-[#E1306C]'/>
                </div>
        </ul>
      
       </div>
    </header>
    );
};

export default Navbar;