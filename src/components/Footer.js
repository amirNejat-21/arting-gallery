import React from 'react';
// svg
import {ReactComponent as Footerr} from "../image/wave-haikei(6).svg"
// img
import image1 from '../image/IMG_20230513_090050_640.jpg'
import image2 from '../image/IMG_20230513_090051_512.jpg'

import image4 from '../image/IMG_20230513_090109_595.jpg'

const Footer = () => {
    return (
        <div className='relative mt-[200px]'>
            <Footerr className=' w-[100vw] h-[30vh] sm:w-[100vw] sm:h-[47%]  '/>
            <img className='w-9 sm:w-12 md:w-16 lg:w-24 absolute bottom-[57%] left-3 rounded-full' src={image1} alt=' img' />
            <img className='w-9 sm:w-12 md:w-16 lg:w-24 absolute bottom-[56%] left-[45%] rounded-full' src={image2} alt=' img' />
            <img className='w-9 sm:w-12 md:w-16 lg:w-24 absolute bottom-[55%] left-[90%] rounded-full' src={image4} alt=' img' /> 

             <div className='absolute flex   bottom-10 sm:bottom-16 md:bottom-24 lg:bottom-40'>
            <div className='ml-[20px] sm:ml-[80px] md:ml-[100px] lg:ml-[140px]  w-[120px] lg:w-[180px] '>
            <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl '>ABOUT US</h3>
            <p className='font-extralight text-sm sm:text-base md:text-lg lg:text-xl sm:mt-3'>Lorem ipsum odor amet, consectetuer.</p>
            </div> 
            <div className=' ml-[20px] sm:ml-[80px] md:ml-[100px] lg:ml-[140px] w-[120px] lg:w-[180px] '>
            <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>Useful Links</h3>
                <ul>
                    <li className='font-extralight text-sm sm:text-base md:text-lg lg:text-xl sm:mt-3'>Product</li>
                    <li className='font-extralight text-sm sm:text-base md:text-lg lg:text-xl '>Login</li>
                    <li className='font-extralight text-sm sm:text-base md:text-lg lg:text-xl'>Contact Us</li>
                </ul>
            </div>
            <div className=' ml-[20px] sm:ml-[80px] md:ml-[100px] lg:ml-[140px] w-[120px] lg:w-[180px]'>
            <h3 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl'>Contact Us</h3>
                <ul>
                    <li className='font-extralight text-sm sm:text-base md:text-lg lg:text-xl sm:mt-3'>Support@Bla.com</li>
                    <li className='font-extralight text-sm sm:text-base md:text-lg lg:text-xl'> Registerd in Tehran</li>
                    
                </ul>
            </div>
            </div> 
            <p className='text-xs sm:text-sm md:text-base lg:text-lg absolute bottom-1 left-1'>Copyright @ 2023,ArvinGallery.com-<span>Privacy | Terms Of Service  </span></p>
        </div>
    );
};

export default Footer;