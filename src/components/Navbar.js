import React from 'react';
import navLogo from '../Icon/navIcon.png';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navItem = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/admin'>Admin</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-y-2">
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
            <div className="navbar-end">
                <a className="btn btn-primary py-2 px-5">
                    Login
                </a>
            </div>
        </div>
    );
};

export default Navbar;