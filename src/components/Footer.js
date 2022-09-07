import React from 'react';
import { Link } from 'react-router-dom'
import locationIcon from '../Icon/location.png';
import fb from '../Icon/Vector.png';
import insta from '../Icon/Vector-1.png';
import linkdin from '../Icon/Vector-2.png';
import youtube from '../Icon/Vector-3.png';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-primary mt-5">
                <footer className="footer p-10 text-white">
                    <div className='flex'>
                        <img className='w-[18px] mt-1 h-[20px]' src={locationIcon} alt="" />
                        <span className='font-poppins font-medium text-base lg:leading-[24px] tracking-[0.15%]'>
                            H#000 (0th Floor), Road #00, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </span>
                    </div>
                    <div>
                        <span className="footer-title text-white font-poppins font-medium text-base lg:leading-[24px] tracking-[0.15%]">Company</span>
                        <Link to='/about' className="link link-hover">About</Link>
                        <Link to='/' className="link link-hover">Project</Link>
                        <Link to='/' className="link link-hover">Our Team</Link>
                        <Link to='/' className="link link-hover">Submit Listing</Link>
                    </div>
                    <div>
                        <span className="footer-title text-white font-poppins font-medium text-base lg:leading-[24px] tracking-[0.15%]">Quick Links</span>
                        <Link to='/' className="link link-hover">Quick Links</Link>
                        <Link to='/' className="link link-hover">Rentals</Link>
                        <Link to='/' className="link link-hover">Sales</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Our blog</Link>
                    </div>
                    <div>
                        <span className="footer-title text-white font-poppins font-medium text-base lg:leading-[24px] tracking-[0.15%]">About us</span>
                        <span>Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Purus commodo ipsum <br />
                            duis laoreet maecenas. Feugiat
                        </span>
                        <div className="flex gap-x-7">
                            <img className='w-[23px] h-[23px]' src={fb} alt="" />
                            <img className='w-[23px] h-[23px]' src={insta} alt="" />
                            <img className='w-[23px] h-[23px]' src={linkdin} alt="" />
                            <img className='w-[23px] h-[23px]' src={youtube} alt="" />
                        </div>
                    </div>
                </footer>
                <div className="text-white font-light font-poppins text-sm lg:leading-[24px] tracking-[0.4px]">
                    <p>Copyright © 2022 - All right reserved by Luxary Living Ltd</p>
                </div>
            </div>
        </>
    );
};

export default Footer;