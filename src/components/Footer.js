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
            <img className='w-7 sm:w-12 absolute bottom-[57%] left-3 rounded-full' src={image1} alt=' img' />
            <img className='w-7 sm:w-12 absolute bottom-[56%] left-[45%] rounded-full' src={image2} alt=' img' />
            <img className='w-7 sm:w-12 absolute bottom-[55%] left-[90%] rounded-full' src={image4} alt=' img' /> 

             <div className='absolute flex   bottom-14 sm:bottom-18'>
            <div className='ml-[20px] sm:ml-[80px] w-[120px] '>
            <h3 className='font-bold text-sm sm:text-lg'>ABOUT US</h3>
            <p className='font-extralight text-xs sm:text-base '>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            </div> 
            <div className=' ml-[20px] sm:ml-[80px] w-[120px] '>
            <h3 className='font-bold text-sm sm:text-lg'>Useful Links</h3>
                <ul>
                    <li className='font-extralight text-xs sm:text-base'>Product</li>
                    <li className='font-extralight text-xs sm:text-base'>Login</li>
                    <li className='font-extralight text-xs sm:text-base'>Contact Us</li>
                </ul>
            </div>
            <div className=' ml-[20px] sm:ml-[80px] w-[120px]'>
            <h3 className='font-bold text-sm sm:text-lg'>Contact Us</h3>
                <ul>
                    <li className='font-extralight text-xs sm:text-base'>Support@Bla.com</li>
                    <li className='font-extralight text-xs sm:text-base'>Company Registerd in Tehran</li>
                    
                </ul>
            </div>
            </div> 
            <p className='text-xs sm:text-sm absolute bottom-1 left-1'>Copyright @ 2023,ArvinGallery.com-<span>Privacy | Terms Of Service  </span></p>
        </div>
    );
};

export default Footer;