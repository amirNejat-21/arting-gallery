import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import{ FaTwitter } from 'react-icons/fa'
import{ FaFacebook } from 'react-icons/fa'
import{ FaInstagram } from 'react-icons/fa'

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
                <ul className='side-menu'>
                    <Link to='/main'><li>Home</li></Link>
                    <Link to='/store' ><li>Product</li></Link>
                    <Link ><li>Checkout</li></Link>
                    <Link ><li>About</li></Link>
                </ul>
                <div className='social'>
                    <FaTwitter className='duration-300 p-3 bg-[#e6edf6] rounded-[7px] text-[color:var(--icons)] text-5xl cursor-pointer hover:scale-125 hover:text-gray-900'  />
                    <FaFacebook className='duration-300 p-3 bg-[#e6edf6] rounded-[7px]  text-[color:var(--icons)] text-5xl cursor-pointer hover:scale-125 hover:text-gray-900' />
                    <FaInstagram className='duration-300 p-3 bg-[#e6edf6] rounded-[7px]  text-[color:var(--icons)] text-5xl cursor-pointer hover:scale-125 hover:text-gray-900'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;