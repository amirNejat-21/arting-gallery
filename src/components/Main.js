import React from 'react';
import { Link } from 'react-router-dom';
import{ BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import{ RxDotFilled } from 'react-icons/rx'

// style
import styles from "../styles/modules/Main.module.scss"

// img
import MainImg from "../image/skate board main.jpg"

import UserIcon from "../image/user icon.png"


import Navbar from "./Navbar"




const Main = () => {
   
    const slide =[
        {
             id:"1",
            img:require("../image/1.jpg")
        },
        {
             id:"2",
            img:require("../image/2.jpg")
        },
        {
             id:"3",
            img:require("../image/3.jpg")
        },
        {
             id:"4",
            img:require("../image/1.jpg")
        },
        {
             id:"5",
            img:require("../image/2.jpg")
        },
        {
            id:"6",
            img:require("../image/3.jpg")
        },
    ]
    

    const prevSlide = () => {
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft -350
     } 
     const nextSlide = () => {
         const slider = document.getElementById("slider")
         slider.scrollLeft = slider.scrollLeft +350
     } 

    
    return (
            <div>
        <Navbar />
        <Link to={`/board`}><img className={styles.UserIcon} src={UserIcon} alt='logo' /> </Link>
         <div  className='group border-b-2 relative  items-center mt-16 '>
                <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y[-50%] left-[10px] text-2xl rounded-full p-1 bg-white  text-black cursor-pointer '>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                <div id='slider'  className='duration-500 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'> 
                   {
                    slide.map((item)=>(
                        <img  key={item.id} className='w-[350px] h-[240px] inline-block p-2 duration-300' src={item.img} alt='img' />
                    ))
                  } 
                  


                 </div>
                <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y[-50%] right-[10px] text-2xl rounded-full p-1 bg-white  text-black cursor-pointer '>
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
                <div className='flex   justify-center py-2  relative '>
                {
                    slide.map((slide, slideIndex)=>(
                        <div className='text-2xl cursor-pointer'>
                            <RxDotFilled/>  
                        </div>
                    ))
                  }
                </div>
            </div> 
             
       
        <div className={styles.container}>
                <img src={MainImg} alt='MainImg'  className={styles.Main}/>
                <h3 className={styles.Main__txt} >the great life style with Ema Skate Board</h3>
            <div className={styles.btn__container} >
            <Link to="/store"><button className={styles.btn}>Buy Now</button></Link>
                 <button className={styles.btn}>Learn more</button>
            </div>
            
        </div>
            </div>
        
        
    );
};

export default Main;