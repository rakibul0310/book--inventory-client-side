import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='top-banner flex justify-center items-center'>
                <div className='text-white flex flex-col justify-center items-center w-3/4 md:w-2/4'>
                    <h2 className='text-2xl md:text-4xl font-bold leading-10 mb-3'>A solid network of warehouses, trucks and partners</h2>
                    <p className='text-md font-light'>We offer our customers more benefits significant reduction in transport costs, flexible working hours and multiple direct departures for Bangladesh during the week.</p>
                    <button className='btn px-6 py-2 border-[1px] border-white mt-6 text-xl font-medium hover:bg-[#1566AA] duration-500'><Link to="/register">Register Now</Link></button>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;