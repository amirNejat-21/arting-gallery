import React from 'react';
import { Link } from 'react-router-dom';
import{ BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import{ RxDotFilled } from 'react-icons/rx'
import{ FaSignInAlt } from 'react-icons/fa'

// components
import DarkMode from './DarkMode/DarkMode';

// style
import styles from "../styles/modules/Main.module.scss"

// img
import MainImg from "../image/skate board main.jpg"
import logo from "../image/lloo.jpg"

// import UserIcon from "../image/user icon.png"


import Navbar from "./Navbar"




const Main = () => {
   
    const slide =[
        {
             id:1,
            img:require("../image/IMG_20230513_090050_640.jpg")
        },
        {
             id:2,
            img:require("../image/IMG_20230513_090051_512.jpg")
        },
        {
             id:3,
            img:require("../image/IMG_20230513_090100_060.jpg")
        },
        {
             id:4,
            img:require("../image/IMG_20230513_090108_705.jpg")
        },
        {
             id:5,
            img:require("../image/IMG_20230513_090108_758.jpg")
        },
        {
            id:6,
            img:require("../image/IMG_20230513_090109_383.jpg")
        },
        {
            id:7,
            img:require("../image/IMG_20230513_090109_595.jpg")
        },
        {
            id:8,
            img:require("../image/IMG_20230513_090117_288.jpg")
        },
    ]
    

    const prevSlide = () => {
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft -270
     } 
     const nextSlide = () => {
         const slider = document.getElementById("slider")
         slider.scrollLeft = slider.scrollLeft +270
     } 

    
    return (
            <div className={styles.body}>
        <Navbar />
        <Link to={`/board`}> <FaSignInAlt className={styles.signIn}/> </Link>
        {/* <img fill="currentColor" className={styles.logo} src={logo} alt='logo'  />  */}
         <div  className='group border-b-2   items-center  '>
        <DarkMode className={styles.darkMode}/>
        <div className='flex   justify-center '>
            <h1 className={styles.txt}>آروین گالری</h1>
        </div>
                <div  className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y[-50%] left-[10px] text-2xl rounded-full p-1 bg-[color:var(--text-reverse)]  text-[color:var(--border)] cursor-pointer '>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                <div id='slider'  className='duration-500 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-5'> 
                   {
                    slide.map((item)=>(
                       <Link to='/store'> <img  key={item.id} className='w-[270px] h-[270px] rounded-[20px] inline-block p-3 duration-300' src={item.img} alt='img' /></Link>
                    ))
                  } 
                  


                 </div>
                <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y[-50%] right-[10px] text-2xl rounded-full p-1 bg-[color:var(--text-reverse)]  text-[color:var(--border)] cursor-pointer '>
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
                <div className='flex   justify-center py-2  relative '>
                {
                    slide.map((slide, slideIndex)=>(
                        <div className='text-2xl cursor-pointer'>
                            <RxDotFilled className='text-[color:var(--icons)]' />  
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