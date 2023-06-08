import React from 'react';
// svg
import {ReactComponent as Boble} from "../image/hhhorizon.svg"
const News = () => {
    return (
        <div className='relative'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl  font-bold mt-[200px] relative left-[28%] sm:left-[32%] lg:left-[34%] w-fit'>Newsletter</h1>
            <p className='text-1xl sm:text-2xl md:text-3xl font-normal mt-[30px] mb-[30px] relative left-[12%] lg:left-[20%] w-fit'>Sign up to stay in the loop with the latest board!</p>
         
            <Boble />
            
            <div className='absolute left-[5%] top-[35%]'>
                <div className='flex items-center justify-center flex-row flex-wrap w-[90vw]' >
                     <input className='w-[100%] sm:w-[80vw] md:w-[60%] md:mr-[10px]   mr-[20px] relative outline-none h-[48px] mb-3 md:mb-0 rounded-3xl px-8 text-white bg-[#7ce0f7] text-xl  '  type="email" placeholder='Your email'/>
                     <button className='inline-flex items-center mr-[20px] justify-center relative w-[100%] sm:w-[80vw] md:w-32 md:mr-0  h-[48px] bg-white text-xl ml-1 rounded-3xl p-[9px]  text-[#22a6b3]' type='submit'  >Sign Up</button>
                </div >
                <div className='flex mt-4 sm:ml-[20px] md:ml-14 lg:ml-24 '> 
                    <input className='p-[9px] mr-5  border-none' type="checkbox" />
                <label className='text-xl  text-black font-medium'>Send me news about board releases!</label>
                </div>
            </div>
           
        </div>
    );
};

export default News;