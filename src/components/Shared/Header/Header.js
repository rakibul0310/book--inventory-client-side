import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='flex justify-between items-center bg-[#1566AA] py-5 px-5'>
                <div>
                    <h2 className='text-2xl font-bold text-white'><Link to="/">Book Inventory.</Link></h2>
                </div>

                <div className={`block md:hidden text-3xl z-20 text-white`} onClick={() => setOpen(!open)}>
                    {
                        open ? <FontAwesomeIcon icon={faXmark} /> :
                            <FontAwesomeIcon icon={faBars} />
                    }
                </div>
                <nav className={`w-1/2 p-10 md:p-0 text-lg text-white font-normal bg-[#1566AA] lg:bg-transparent flex flex-col md:flex-row justify-evenly absolute right-0 md:static duration-500 ${open ? 'top-0' : 'top-[-500px]'}`}>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </nav>
            </div >
        </div>
    );
};

export default Header;