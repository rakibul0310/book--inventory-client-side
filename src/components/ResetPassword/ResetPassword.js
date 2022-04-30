import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );


    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <div className='flex justify-center items-center min-h-screen'><p>Sending...</p></div>;
    }

    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handleReset = async () => {
        await sendPasswordResetEmail(email);
        toast("Email Sent!");
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h2 className='text-lg font-medium'>Login with email and password</h2>
            <div className='flex flex-col w-3/4 md:w-1/4'>
                <label className='text-lg mt-5' htmlFor="email">Email</label>
                <input onBlur={handleEmail} className='h-10 pl-3 outline-[#1566AA] border-[1px] border-gray-200' type="email" name="email" id="email" placeholder='Enter your email' required />
                <button onClick={handleReset} className='my-5 px-6 py-1 bg-[#1566AA] text-white text-lg font-semibold cursor-pointer'>Reset</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ResetPassword;