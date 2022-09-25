import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeServices')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [homeServices])
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
        </div>
    );
};

export default HomeServices;