import React from 'react';
import navLogo from '../Icon/navIcon.png';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom'
import CommonBtn from './CommonBtn';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        <Loading></Loading>
    }
    const handleLogOut = () => {
        signOut(auth);
        navigate('/login')
    }
    const navItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/admin'>Admin</Link></li>
    </>
    return (
        <div className="bg-#F7F7F7">
            <div className="navbar px-[40px] pr-45">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-y-2 font-medium">
                            {navItem}
                        </ul>
                    </div>
                    <a className="normal-case text-xl cursor-pointer">
                        <img className='w-32' src={navLogo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-x-5 font-medium">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end lg:mr-7">
                    {
                        user ? <> <span className='dropdown dropdown-end font-bold capitalize mr-4'>{user?.displayName}</span>
                            <div className='tooltip tooltip-warning tooltip-bottom' data-tip="Log Out">
                                <HiOutlineLogout className='cursor-pointer' size={25} onClick={handleLogOut}></HiOutlineLogout>
                            </div>
                        </> :
                            <Link to='/login'>
                                <CommonBtn>
                                    <span className='px-10'>Login</span>
                                </CommonBtn>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;