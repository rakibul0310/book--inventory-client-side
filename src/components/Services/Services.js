import React from 'react';

import transport from '../../images/service-transport.jpg';
import warhouse from '../../images/service_warehouse.jpg';

const Services = () => {
    return (
        <div className='flex flex-col items-center px-7 mb-20 cursor-pointer'>
            <h2 className='text-3xl font-bold underline decoration-[#FDC300] mt-20 mb-10'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='flex flex-col justify-center border-[1px] border-gray-200 rounded-md hover:scale-105 duration-700 mb-10 md:mb-0'>
                    <img className='w-full' src={transport} alt="" />
                    <h3 className='text-2xl font-semibold'>Transpotation</h3>
                    <p className='text-md font-thin'>We believe that transportation can be done quickly, with safety and at low cost and we emphasize on it. With properly trained staff, modern equipment, facilities infrastructure and love of what we do, we ensure the quality of our services.</p>
                </div>
                <div className='flex flex-col justify-center border-[1px] border-gray-200 rounded-md hover:scale-105 duration-700 mb-10 md:mb-0'>
                    <img className='w-full' src={warhouse} alt="" />
                    <h3 className='text-2xl font-semibold'>Warhouse</h3>
                    <p className='text-md font-thin'>The services provided are:</p>
                    <ul className='list-inside list-disc '>
                        <li className='text-md font-extralight'>Warehousing services</li>
                        <li className='text-md font-extralight'>Palletizing goods</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;