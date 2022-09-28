import React from 'react';
import starIcn from '../Icon/star.png'

const Testimonials = ({ testimonial }) => {
    const { name, img, workPosition, message } = testimonial;
    return (
        <div className='w-[387px] h-[287px] bg-[#FFFFFF]'>
            <div className="flex items-center justify-start mt-[33px]">
                <img className='w-[64px] h-[64px] ml-[20px]' src={img} alt="" />
                <div className="ml-[18px]">
                    <h1 className='font-semibold text-[20px]'>{name}</h1>
                    <h3 className='font-medium text-[16px]'>{workPosition}</h3>
                </div>
            </div>
            <p className='text-[16px] text-[#707070] px-[20px] py-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
            <div className="flex pl-[12px] mt-2">
                <img className='w-[24px] h-[24px] ml-[8px]' src={starIcn} alt="" />
                <img className='w-[24px] h-[24px] ml-[8px]' src={starIcn} alt="" />
                <img className='w-[24px] h-[24px] ml-[8px]' src={starIcn} alt="" />
                <img className='w-[24px] h-[24px] ml-[8px]' src={starIcn} alt="" />
                <img className='w-[24px] h-[24px] ml-[8px]' src={starIcn} alt="" />
            </div>
        </div>
    );
};

export default Testimonials;