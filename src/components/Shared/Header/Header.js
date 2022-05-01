import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate("/")
    }

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
                    <CustomLink to="/contact">Contact Us</CustomLink>
                    {
                        user ?
                            <button className='btn px-6 py-1 mt-5 md:mt-0 bg-[#FDC300] text-white font-medium rounded-[50px]' onClick={handleSignOut}>Log Out</button> :
                            <button className='btn px-6 py-1 mt-5 md:mt-0 bg-[#FDC300] text-white font-medium rounded-[50px]'><Link to="/login">Login</Link></button>
                    }
                </nav>
            </div >
        </div>
    );
};

export default Header;