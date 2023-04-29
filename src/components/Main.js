import React from 'react';
import { Link } from 'react-router-dom';

// style
import styles from "../styles/modules/Main.module.scss"

// img
import MainImg from "../image/skate board main.jpg"

import UserIcon from "../image/user icon.png"


import Navbar from "./Navbar"



const Main = () => {
    return (
        <>
        
       
          
           
            
            
       
        <div className={styles.container}>
        <Navbar />
        <Link to={`/board`}><img className='UserIcon' src={UserIcon} alt='logo' /> </Link>
                <img src={MainImg} alt='MainImg'  className={styles.Main}/>
                <h3 className={styles.Main__txt} >the great life style with Ema Skate Board</h3>
            <div className={styles.btn__container} >
            <Link to="/store"><button className={styles.btn}>Buy Now</button></Link>
                 <button className={styles.btn}>Learn more</button>
            </div>
            
        </div>
        </>
    );
};

export default Main;