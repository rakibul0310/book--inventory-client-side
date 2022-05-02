import React from 'react';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon3.png';
import icon3 from '../../images/icon4.png';
import './Features.css';

const Features = () => {
    return (
        <div className='feature flex flex-col items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='flex flex-col justify-center hover:scale-105 duration-700 mb-10 md:mb-0 text-white'>
                    <img className='w-fit rounded-full mx-auto' src={icon1} alt="" />
                    <h3 className='text-2xl font-semibold'>Safe & Secure</h3>
                    <p className='text-sm font-thin mx-3 mb-3'>Rely on us with certainty/safely and benefit from our quality, low cost solutions for the transport of your cargo.</p>
                </div>
                <div className='flex flex-col justify-center hover:scale-105 duration-700 mb-10 md:mb-0 text-white'>
                    <img className='w-fit rounded-full mx-auto' src={icon2} alt="" />
                    <h3 className='text-2xl font-semibold'>Fast Delivery/Immediacy & Flexibility</h3>
                    <p className='text-sm font-thin mx-3 mb-3'>Wherever you are in Greece or Italy, our fast and flexible services ensure you safe transports on time, every time.</p>
                </div>
                <div className='flex flex-col justify-center hover:scale-105 duration-700 mb-10 md:mb-0 text-white'>
                    <img className='w-fit rounded-full mx-auto' src={icon3} alt="" />
                    <h3 className='text-2xl font-semibold'>Direct Support</h3>
                    <p className='text-sm font-thin mx-3 mb-3'>We are by your side in every step, every demand, every problem with continuous service & support, from receipt to delivery.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;