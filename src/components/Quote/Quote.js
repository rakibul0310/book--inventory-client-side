import React from 'react';
import { Link } from 'react-router-dom';

import './Quote.css';

const Quote = () => {
    return (
        <div className='quote flex justify-center items-center'>
            <div className='text-white flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold'>Want to know more about our warehouses & transports?</h1>
                <p className='text-xl font-semibold mt-1 mb-3'>Get a full-scale pricelist for your business cargo and <br /> recommended solutions to your needs</p>
                <button className='px-6 py-2 duration-500 text-xl font-semibold border-[2px] border-[#FDC300] rounded-3xl hover:bg-[#FDC300] text-white'><Link to="/contact">Contact Us</Link></button>
            </div>
        </div>
    );
};

export default Quote;