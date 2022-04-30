import React from 'react';
import { Link } from 'react-router-dom';

import googleLogo from '../../images/Google-logo.png';

const Register = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Register a new account</h2>
            <form className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5 text-left' htmlFor="email">Email</label>
                <input className='h-10 pl-3 outline-[##1566AA] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <label className='text-lg mt-3 text-left' htmlFor="password">Password</label>
                <input className='h-10 pl-3 outline-[##1566AA] border-[1px] border-gray-200' type="password" name="password" id="password" placeholder='Enter your password' required />
                <label className='text-lg mt-3 text-left' htmlFor="confrim-password">Confrim password</label>
                <input className='h-10 pl-3 outline-[##1566AA] border-[1px] border-gray-200' type="password" name="password" id="confrim-password" placeholder='Confrim your password' required />
                <input className='my-5 px-6 py-1 bg-[#1566AA] text-white text-lg font-semibold cursor-pointer' type="submit" value="Register" />
                <span className='text-sm'>Already have an account? <Link to="/login"><button className='text-blue-500 underline decoration-blue-500'>Login</button></Link></span>
            </form>
            <div className='mt-8'>
                <div className='flex justify-center items-center'>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                    <small className='mx-2 text-lg font-semibold'>Or</small>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                </div>
                <div>
                    <button className='my-5 px-6 py-1 bg-red-600 text-white hover:bg-[#1F2B6C] duration-500 text-lg font-semibold cursor-pointer rounded-sm'>
                        <img className='inline mr-3' src={googleLogo} alt="" height={30} width={30} />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;