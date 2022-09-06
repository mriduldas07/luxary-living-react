import React from 'react';
import CommonBtn from './CommonBtn';
import BannerImg from '../Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

const Banner = () => {
    return (
        <div className='bg-#F7F7F7'>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-[40px]">
                <div>
                    <h1 className='text-#1F1632 font-bold text-4xl lg:text-6xl font-poppins lg:leading-[80px] tracking-[0.15%] lg:mt-[90px] mt-[30px] '>We Build <br /> Your Dream</h1>
                    <p className='text-#606268 font-normal text-base font-poppins leading-[28px] tracking-[0.15%] mt-[17px] lg:pr-[80px]'>Online Easte Agency, the mordern way to sell your own home,You can use Griffin Residential to market your property</p>
                    <CommonBtn
                        width={172}
                        marginTop={30}
                    >
                        <p className='w-25'>Booking</p>
                    </CommonBtn>
                </div>
                <div className="mt-[56px]">
                    <img className='w-[571px] lg:h-[502px]' src={BannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;