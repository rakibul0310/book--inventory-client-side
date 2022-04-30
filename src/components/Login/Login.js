import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Login with email and password</h2>
            <form onSubmit={handleLogin} className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5 text-left' htmlFor="email">Email</label>
                <input onBlur={handleEmail} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <label className='text-lg mt-3 text-left' htmlFor="password">Password</label>
                <input onBlur={handlePassword} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="password" name="password" id="password" placeholder='Enter your password' required />
                <input className='my-5 px-6 py-1 bg-[#1566AA] text-white text-lg font-semibold cursor-pointer' type="submit" value="Login" />
                <Link to="/resetpassword"><span className='text-sm text-blue-500 underline decoration-blue-500'>Forgot password?</span></Link>
                <span className='text-sm'>Don't have any account? <Link to="/register"><button className='text-blue-500 underline decoration-blue-500'>register</button></Link></span>
            </form>

        </div>
    );
};

export default Login;