import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// styles
import stayle from "./navbar.css"
// icon
import logo from "../image/LOGO.png"
import cart from "../image/iconoir_add-to-cart.png"
import twitter from "../image/icons8-twitter.svg"
import facebook from "../image/icons8-facebook.svg"
import instagram from "../image/icons8-instagram.svg"

// data
import data from "../Api/data.js"

// component
import Product from './shared/Product';


const Store = () => {

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
                 <Link to={`/`}><img className='UserIcon' src={cart} alt='cart' /> </Link>
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
            <div style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"100px" }}>

            {
                data.map(item => <Product  key={item.id} productsData={item}/>)
            }
            
            </div>
        </div>
    );
};

export default Store;