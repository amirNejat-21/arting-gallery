import React from 'react';
import { Link } from 'react-router-dom';
import{ BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
import{ RxDotFilled } from 'react-icons/rx'
import{ FaSignInAlt } from 'react-icons/fa'

// components
import DarkMode from './DarkMode/DarkMode';
import Footer from './Footer';
import News from './News';

// style
import styles from "../styles/modules/Main.module.scss"


// img
import {ReactComponent as MainImg} from "../image/blob-scene-haikei(2).svg"

import material from "../image/icons8-package-settings-100.png"
import board from "../image/icons8-board-64.png"
import handshake from "../image/icons8-meeting-100.png"
import delivery from "../image/icons8-delivery-100.png"


import {ReactComponent as Logo} from "../image/logo.svg"


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
        {
            id:9,
            img:require("../image/IMG_20230513_090117_288.jpg")
        },
        {
            id:10,
            img:require("../image/IMG_20230513_090117_288.jpg")
        },
    ]
    

    const prevSlide = () => {
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft -260
     } 
     const nextSlide = () => {
         const slider = document.getElementById("slider")
         slider.scrollLeft = slider.scrollLeft +260
     } 


    
    return (
            <div className={styles.body}>
        <Navbar />
        <Link to={`/board`}> <FaSignInAlt className={styles.signIn}/> </Link>
       {/* <Logo className={styles.logo}/> */}
        
         <div  className='group    items-center  '>
            <div className='relative top-20'>
             <DarkMode />
            </div>
        <div className='flex   justify-center  '>

            <h1 className={styles.txt}>آروین گالری</h1>
        </div>
        
                <div  className='hidden group-hover:block absolute top-[40%] max-md:top-[37%] max-sm:top-[33%] -translate-x-0 translate-y[-50%] left-[17px] text-2xl rounded-full p-2 max-md:p-1 max-sm:p-0 bg-[color:var(--text-reverse)]  text-[color:var(--border)] cursor-pointer '>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                <div className='flex justify-center w-[98%] ml-[15px] mt-16'>
                <div id='slider'  className='pl-[0]  duration-500  h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide '> 
                   {
                    slide.map((item)=>(
                        
                       <Link to='/store'> <img  key={item.id} className='justify-center items-center w-[240px] h-[240px] max-sm:w-32 max-sm:h-32 max-md:w-48 max-md:h-48   rounded-[15px] inline-block mr-[18px] duration-300' src={item.img} alt='img' /></Link>
                       
                    ))
                  } 
                  
                 </div>
                 </div>
                <div className='hidden group-hover:block absolute top-[40%] max-md:top-[37%] max-sm:top-[33%] -translate-x-0 translate-y[-50%] right-[17px] text-2xl rounded-full p-2 max-md:p-1 max-sm:p-0 bg-[color:var(--text-reverse)]  text-[color:var(--border)] cursor-pointer '>
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
                <MainImg className={styles.Main}/>
                <h2>the great Nail and thread board  <br/>with Arvin Gallery</h2> 
                <div className={styles.btn__container} >
            <Link to="/store"><button className={styles.btn}>Buy Now</button></Link>
                 <button className={styles.btn}>Learn more</button>
            </div>
           
            </div>
               <div className={styles.cont}>

                <div className={styles.box} >
                  <img className='w-[140px] ' src={material} alt='material'/>
                  <h3 className='text-2xl font-[600] text-[var(--text)]'>The best  materials for making board </h3>
                  <p className='text-lg mt-[10px] font-[500] text-[var(--text)]'> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac Lorem ipsum odor amet, consectetuer adipiscing el Lorem ipsum odor amet, consectetuer adipiscing</p>
                </div>
                <div className={styles.box}>
                  <img  className='w-[80px]  mt-[10px] pb-7' src={board} alt='material'/>
                  <h3 className='text-2xl font-[600] text-[var(--text)]'>professional hand made art </h3>
                  <p className='text-lg mt-[10px] font-[500] text-[var(--text)]'> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac Lorem ipsum odor amet, consectetuer adipiscing el Lorem ipsum odor amet, consectetuer adipiscing</p>
                </div>
                <div className={styles.box}>
                  <img className='w-[140px]' src={handshake} alt='material'/>
                  <h3 className='text-2xl font-[600] text-[var(--text)]'>Easy to make deal</h3>
                  <p className='text-lg mt-[10px] font-[500] text-[var(--text)]'> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac Lorem ipsum odor amet, consectetuer adipiscing el Lorem ipsum odor amet, consectetuer adipiscing</p>
                </div>
                <div className={styles.box}>
                  <img className='w-[140px]' src={delivery} alt='material'/>
                  <h3 className='text-2xl font-[600] text-[var(--text)]'>Fast delivery </h3>
                  <p className='text-lg mt-[10px]  font-[500] text-[var(--text)]'> Lorem ipsum odor amet, consectetuer adipiscing elit. Ac Lorem ipsum odor amet, consectetuer adipiscing el Lorem ipsum odor amet, consectetuer adipiscing</p>
                </div>
                </div>
                <News/>
                  
           <Footer/>
       </div>
            
        
        
    );
};

export default Main;