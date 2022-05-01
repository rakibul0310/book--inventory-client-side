import React from 'react';
import error from '../../images/error.jpg';

const NoPageFound = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center'>
            <img className='w-3/4 h-[300px] md:h-[600px]' src={error} alt="" />
        </div>
    );
};

export default NoPageFound;