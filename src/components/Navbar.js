import React,{useState} from 'react';
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

    const[burger_class,setBurgerClass] = useState("burger-bar unclicked")
    const[menu_class,setMenuClass] = useState("menu hidden")
    const[isMenuClicked,setIsMenuClicked] = useState(false)


    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked") 
            setMenuClass("menu visible") 
        }
        else{
            setBurgerClass("burger-bar unclicked") 
            setMenuClass("menu hidden") 
        }
        setIsMenuClicked(!isMenuClicked)
    }


    const [open , setOpen] = useState(false)
    
    return (
        <div className="mainContainer">
             
            <nav>
            
                
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
           
            <div   className={menu_class} >
                
                <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
                 <Link to='/main'>  <div className='sidebar-title'>
                    <span>
                        <i><FaHome/></i>
                        Home
                    </span>
                   </div></Link>
                     <div className='sidebar-title '>
                    <span>
                        <i><FaProductHunt/></i>
                        Product
                    </span>
                    <i onClick={() => setOpen(!open)}><FaAngleDown className='toggle-btn mt-[5px]'/></i>
                   </div>
                   <Link to='/store'>  <div className='sidebar-content flex   duration-300'>
                   <i><FaClock className='mr-[5px] mt-[5px] ml-[38px]'/></i>
                    clock
                   </div></Link>
                   <Link to='/store'>   <div className='sidebar-content flex   duration-300'>
                   <i><FaClock className='mr-[5px] mt-[5px] ml-[38px]'/></i>
                    clock -2
                   </div></Link>
                   <div className='sidebar-title'>
                    <span>
                        <i><AiFillContacts/></i>
                        Contact
                    </span> 
                   </div>
                   <div className='sidebar-title'>
                    <span>
                        <i><FaUser/></i>
                        About Us
                    </span>
                   </div>
                </div>
                <div className='social'>
                    <FaWhatsapp className='duration-300 p-3  rounded-[7px] text-[color:var(--icons)] text-6xl cursor-pointer hover:scale-125 hover:text-[#28D146]'  />
                    <FaTelegram className='duration-300 p-3  rounded-[7px]  text-[color:var(--icons)] text-6xl cursor-pointer hover:scale-125 hover:text-[#229ED9]' />
                    <FaInstagram className='duration-300 p-3  rounded-[7px]  text-[color:var(--icons)] text-6xl cursor-pointer hover:scale-125 hover:text-[#E1306C]'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;