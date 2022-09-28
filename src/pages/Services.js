import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../components/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);
    return (
        <div>
            <h1 className='font-bold text-3xl text-center my-3'>Luxury Living Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[50px] gap-4 px-10">
                {
                    services?.map((service, index) => <Service
                        key={service._id}
                        service={service}
                        index={index}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;