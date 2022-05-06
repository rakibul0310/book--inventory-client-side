import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import googleLogo from '../../images/Google-logo.png';
import spinner from '../../images/spinner.gif';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [errPass, setErrPass] = useState(false);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            return navigate(from, { replace: true });
        }
        if (googleUser) {
            const getAccesToken = async () => {
                await axios.post('http://localhost:5000/login', { email: googleUser.user.email })
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
        return <div className=' flex justify-center items-center bg-[#F4EFEC]'>
            <img src={spinner} alt="" />
        </div>;
    }




    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }
    const handleConfrimPassword = (event) => {
        const value = event.target.value;
        setConfrimPassword(value);
    }

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password === confrimPassword) {
            const userEmail = email;
            await createUserWithEmailAndPassword(email, password);
            await axios.post('http://localhost:5000/login', { email: userEmail })
                .then(res => {
                    localStorage.setItem('accessToken', res.data.accessToken);
                })
            setErrPass(false);
        } else {
            setErrPass(true);
        }
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Register a new account</h2>
            <form onSubmit={handleRegister} className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5 text-left' htmlFor="email">Email</label>
                <input onBlur={handleEmail} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <label className='text-lg mt-3 text-left' htmlFor="password">Password</label>
                <input onBlur={handlePassword} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="password" name="password" id="password" placeholder='Enter your password' required />
                <label className='text-lg mt-3 text-left' htmlFor="confrim-password">Confrim password</label>
                <input onBlur={handleConfrimPassword} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="password" name="password" id="confrim-password" placeholder='Confrim your password' required />
                <input className='my-5 px-6 py-1 bg-[#1566AA] text-white text-lg font-semibold cursor-pointer' type="submit" value="Register" />
                {
                    errPass && <p className='text-red-500'>Password does't match</p>
                }
                <span className='text-sm'>Already have an account? <Link to="/login"><button className='text-blue-500 underline decoration-blue-500'>Login</button></Link></span>
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

export default Register;