import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonBtn from './CommonBtn';
import Service from './Service';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/homeServices')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [homeServices]);

    const handleNavigate = () => {
        navigate('/services')
    }
    return (
        <div className='mt-[90px] lg:mx-[100px]'>
            <h6 className='text-center mb-[3px]'>Services</h6>
            <h2 className='font-poppins text-center font-bold text-4xl leading-[50px]'>We're an agency tailored to all <br /> clients' needs that always delivers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 mx-14">
                {
                    homeServices.map((service, index) => <Service
                        key={service._id}
                        service={service}
                        index={index}
                    ></Service>)
                }
            </div>
            <div className="flex justify-center items-center">
                <CommonBtn
                    width={170}
                    marginTop={68}
                    onClick={handleNavigate}
                >
                    Explore More
                </CommonBtn>
            </div>
        </div>
    );
};

export default HomeServices;