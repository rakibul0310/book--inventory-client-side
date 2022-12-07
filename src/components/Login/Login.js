import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import googleLogo from '../../images/Google-logo.png';
import axios from 'axios';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {

            return navigate(from, { replace: true });
        }
        if (googleUser) {
            const getAccesToken = async () => {
                await axios.post('https://bookinventory.onrender.com/login', { email: googleUser.user.email })
                    .then(res => {
                        localStorage.setItem('accessToken', res.data.accessToken);
                    })
            }
            getAccesToken();
            return navigate(from, { replace: true });
        }
    }, [user, googleUser, navigate, from])

    const handleTryAgain = () => window.location.reload()

    if (error || googleError) {
        return (
            <div className='min-h-screen text-red-500 flex flex-col justify-center items-center text-3xl text-center'>
                <p>Error: {error?.message || googleError?.message}</p>
                <button onClick={handleTryAgain} className='btn px-6 py-2 bg-blue-500/70 hover:bg-blue-500 text-gray-700 text-xl font-medium mt-5'>Try again</button>
            </div>
        );
    }
    if (loading || googleLoading) {
        return <Loading />;
    }


    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const userEmail = email
        await signInWithEmailAndPassword(userEmail, password);
        await axios.post('https://bookinventory.onrender.com/login', { email: userEmail })
            .then(res => {
                localStorage.setItem('accessToken', res.data.accessToken);
            })
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
            <div className='mt-8'>
                <div className='flex justify-center items-center'>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                    <small className='mx-2 text-lg font-semibold'>Or</small>
                    <div className='w-[80px] h-[3px] bg-slate-200'></div>
                </div>
                <div>
                    <button onClick={handleGoogleLogin} className='my-5 px-6 py-1 bg-red-600 text-white hover:bg-[#1F2B6C] duration-500 text-lg font-semibold cursor-pointer rounded-sm'>
                        <img className='inline mr-3' src={googleLogo} alt="" height={30} width={30} />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;