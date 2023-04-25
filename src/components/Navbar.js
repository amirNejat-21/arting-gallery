import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import stayle from "./navbar.css"

import logo from "../image/LOGO.png"
import UserIcon from "../image/user icon.png"
import twitter from "../image/icons8-twitter.svg"
import facebook from "../image/icons8-facebook.svg"
import instagram from "../image/icons8-instagram.svg"
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
        <div >
             
            <nav>
            <img className='logo' src={logo} alt='logo'  /> 
                 <Link to={`/board`}><img className='UserIcon' src={UserIcon} alt='logo' /> </Link>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
           
            <div   className={menu_class} >
                <ul className='side-menu'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Checkout</li>
                    <li>About</li>
                </ul>
                <div className='social'>
                <img src={twitter} alt="facebook" /> 
                <img src={facebook} alt="facebook" /> 
                <img src={instagram} alt="facebook" /> 
                </div>
            </div>
        </div>
    );
};

export default Navbar;