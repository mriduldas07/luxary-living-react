import React from 'react';
import navLogo from '../Icon/navIcon.png';
import googleLogo from '../Icon/google.png';
import { SiFacebook } from 'react-icons/si';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../components/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    if (loading || gLoading) {
        <Loading></Loading>
    }
    if (gUser?.providerId === 'google.com') {
        navigate('/home')
        toast.success('Login with google is successfully done')
    }
    return (
        <div className="hero h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col items-center gap-y-48 mt-[-100px]">
                    <img className='w-[147px] h-[60px]' src={navLogo} alt="" />
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='font-poppins font-bold leading-7 mb-[8px] lg:mb-[25px]'>Login With</h1>
                        <div className="flex justify-center items-center border-[#C7C7C7] border-[1px] rounded-[57px] p-1 cursor-pointer font-poppins font-medium text-base leading-5" onClick={() => signInWithGoogle()}>
                            <img className='w-[30px] h-[30px]' src={googleLogo} alt="" />
                            <span className='px-[50px] lg:px-[100px]'>Continue with Google</span>
                        </div>
                        <div className="flex justify-center items-center border-[#C7C7C7] border-[1px] rounded-[57px] p-1 cursor-pointer font-poppins font-medium text-base leading-5" onClick={() => signInWithFacebook()}>
                            <SiFacebook size={32}></SiFacebook>
                            <span className='px-[50px] lg:px-[100px]'>Continue with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;