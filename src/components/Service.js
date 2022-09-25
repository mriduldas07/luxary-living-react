import React from 'react';

const Service = ({ service, index }) => {
    const { img, serviceName, servicePrice, description } = service;
    return (
        <div className={index % 2 !== 0 ? 'shadow-[0_4px_80px_rgba(0,0,0,0.1)] w-[370px] h-[341px] rounded-[10px]' : 'w-[370px] h-[341px]'}>
            <div className="flex justify-center items-center">
                <img className='w-20 h-20 mt-[29px]' src={img} alt="" />
            </div>
            <h2 className='font-semibold text-center text-xl leading-[30px] mt-[24px] pb-[3px]'>{serviceName}</h2>
            <h2 className='font-semibold text-center text-xl leading-[30px] pb-[5px]'>{servicePrice}</h2>
            <p className='font-normal text-center tex-[16px] leading-[28px] text-[#606268] px-14'>{description}</p>
        </div>
    );
};

export default Service;