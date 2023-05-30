import React from 'react';
// svg
import {ReactComponent as Newss} from "../image/wave-haikei(2).svg"
const News = () => {
    return (
        <div className='relative'>
            <h1 className='text-4xl  font-bold mt-[200px] relative left-[28%] w-fit'>Newsletter</h1>
            <p className='text-1xl font-normal mt-[30px] relative left-[12%] w-fit'>Sign up to stay in the loop with the latest board!</p>
            <Newss className='w-[100vw]  mt-20  relative '/>
            <div className='absolute left-[15%] top-[55%]'>
                <div className='flex justify-evenly' >
                     <input className='w-[200px] h-[38px] rounded-3xl px-8 text-white bg-[#7ce0f7] '  type="email" placeholder='Your email'/>
                     <button className='bg-white text-sm ml-1 rounded-3xl p-[9px]  text-[#22a6b3]' type='submit'  >Sign Up</button>
                </div >
                <div className='flex mt-2 '> 
                    <input className='p-[8px] mr-5 border-none' type="checkbox" />
                <label className='text-xs text-white font-bold'>Send me news about board releases!</label>
                </div>
            </div>
        </div>
    );
};

export default News;